import { Buffer } from "buffer";
export class Pack {
  /**
   * @type {Buffer}
   */
  buffer: Buffer = null;
  /**
   * @type {Array<Buffer>}
   */
  makeBuffer: Array<Buffer>;
  getBuffer: () => Buffer;
}

export function AsPack(): any {
  return function (target: any) {
    return class _Pack extends target {
      constructor(...all: any) {
        super(...all);
        this.buffer = Buffer.from([]);
        for (var i = this.makeBuffer.length -1 ;i>=0;i--) {
          this.buffer = Buffer.concat([this.buffer, this.makeBuffer[i]]);
        }
      }
      /**
       * @memberof Pack
       */
      getBuffer(): Buffer {
        return this.buffer;
      }
    };
  };
}

export function AsString(Value: string): PropertyDecorator {
  return function <TClass extends Pack>(target: TClass, attr: string) {
    target.makeBuffer = target.makeBuffer == undefined ? [] : target.makeBuffer;
    target.makeBuffer = [Buffer.from(Value), ...target.makeBuffer];
  };
}

export function AsInt32(Value: number): PropertyDecorator {
  return function <TClass extends Pack>(target: TClass, attr: string) {
    target.makeBuffer = target.makeBuffer == undefined ? [] : target.makeBuffer;
    var b = Buffer.alloc(4);
    b.writeInt32BE(Value);
    target.makeBuffer = [b, ...target.makeBuffer];
  };
}

export function AsInt16(Value: number): PropertyDecorator {
  return function <TClass extends Pack>(target: TClass, attr: string) {
    target.makeBuffer = target.makeBuffer == undefined ? [] : target.makeBuffer;
    var b = Buffer.alloc(2);
    b.writeInt16BE(Value);
    target.makeBuffer = [b, ...target.makeBuffer];
  };
}

export function AsByte(Value: number): PropertyDecorator {
  return function <TClass extends Pack>(target: TClass, attr: string) {
    target.makeBuffer = target.makeBuffer == undefined ? [] : target.makeBuffer;
    var b = Buffer.alloc(1);
    b.writeInt8(Value);
    target.makeBuffer = [b, ...target.makeBuffer];
  };
}

export function AsBinary(Value: Buffer): PropertyDecorator {
  return function <TClass extends Pack>(target: TClass, attr: string) {
    target.makeBuffer = target.makeBuffer == undefined ? [] : target.makeBuffer;
    var b = Buffer.alloc(Value.byteLength);
    b.copy(Value);
    target.makeBuffer = [b, ...target.makeBuffer];
  };
}