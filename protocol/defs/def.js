"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsBinary = exports.AsByte = exports.AsInt16 = exports.AsInt32 = exports.AsString = exports.AsPack = exports.Pack = void 0;
const buffer_1 = require("buffer");
class Pack {
    constructor() {
        /**
         * @type {Buffer}
         */
        this.buffer = null;
    }
}
exports.Pack = Pack;
function AsPack() {
    return function (target) {
        return class _Pack extends target {
            constructor(...all) {
                super(...all);
                this.buffer = buffer_1.Buffer.from([]);
                for (var i = this.makeBuffer.length - 1; i >= 0; i--) {
                    this.buffer = buffer_1.Buffer.concat([this.buffer, this.makeBuffer[i]]);
                }
            }
            /**
             * @memberof Pack
             */
            getBuffer() {
                return this.buffer;
            }
        };
    };
}
exports.AsPack = AsPack;
function AsString(Value) {
    return function (target, attr) {
        target.makeBuffer = target.makeBuffer == undefined ? [] : target.makeBuffer;
        target.makeBuffer = [buffer_1.Buffer.from(Value), ...target.makeBuffer];
    };
}
exports.AsString = AsString;
function AsInt32(Value) {
    return function (target, attr) {
        target.makeBuffer = target.makeBuffer == undefined ? [] : target.makeBuffer;
        var b = buffer_1.Buffer.alloc(4);
        b.writeInt32BE(Value);
        target.makeBuffer = [b, ...target.makeBuffer];
    };
}
exports.AsInt32 = AsInt32;
function AsInt16(Value) {
    return function (target, attr) {
        target.makeBuffer = target.makeBuffer == undefined ? [] : target.makeBuffer;
        var b = buffer_1.Buffer.alloc(2);
        b.writeInt16BE(Value);
        target.makeBuffer = [b, ...target.makeBuffer];
    };
}
exports.AsInt16 = AsInt16;
function AsByte(Value) {
    return function (target, attr) {
        target.makeBuffer = target.makeBuffer == undefined ? [] : target.makeBuffer;
        var b = buffer_1.Buffer.alloc(1);
        b.writeInt8(Value);
        target.makeBuffer = [b, ...target.makeBuffer];
    };
}
exports.AsByte = AsByte;
function AsBinary(Value) {
    return function (target, attr) {
        target.makeBuffer = target.makeBuffer == undefined ? [] : target.makeBuffer;
        var b = buffer_1.Buffer.alloc(Value.byteLength);
        b.copy(Value);
        target.makeBuffer = [b, ...target.makeBuffer];
    };
}
exports.AsBinary = AsBinary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmLmpzIiwic291cmNlUm9vdCI6Ii4vcHJvdG9jb2wvIiwic291cmNlcyI6WyJkZWZzL2RlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBZ0M7QUFDaEMsTUFBYSxJQUFJO0lBQWpCO1FBQ0U7O1dBRUc7UUFDSCxXQUFNLEdBQVcsSUFBSSxDQUFDO0lBTXhCLENBQUM7Q0FBQTtBQVZELG9CQVVDO0FBRUQsU0FBZ0IsTUFBTTtJQUNwQixPQUFPLFVBQVUsTUFBVztRQUMxQixPQUFPLE1BQU0sS0FBTSxTQUFRLE1BQU07WUFDL0IsWUFBWSxHQUFHLEdBQVE7Z0JBQ3JCLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRSxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRTtvQkFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDaEU7WUFDSCxDQUFDO1lBQ0Q7O2VBRUc7WUFDSCxTQUFTO2dCQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNyQixDQUFDO1NBQ0YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFsQkQsd0JBa0JDO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLEtBQWE7SUFDcEMsT0FBTyxVQUErQixNQUFjLEVBQUUsSUFBWTtRQUNoRSxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDNUUsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLGVBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUxELDRCQUtDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLEtBQWE7SUFDbkMsT0FBTyxVQUErQixNQUFjLEVBQUUsSUFBWTtRQUNoRSxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDNUUsSUFBSSxDQUFDLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVBELDBCQU9DO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLEtBQWE7SUFDbkMsT0FBTyxVQUErQixNQUFjLEVBQUUsSUFBWTtRQUNoRSxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDNUUsSUFBSSxDQUFDLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVBELDBCQU9DO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLEtBQWE7SUFDbEMsT0FBTyxVQUErQixNQUFjLEVBQUUsSUFBWTtRQUNoRSxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDNUUsSUFBSSxDQUFDLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVBELHdCQU9DO0FBRUQsU0FBZ0IsUUFBUSxDQUFDLEtBQWE7SUFDcEMsT0FBTyxVQUErQixNQUFjLEVBQUUsSUFBWTtRQUNoRSxNQUFNLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDNUUsSUFBSSxDQUFDLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNkLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQVBELDRCQU9DIn0=