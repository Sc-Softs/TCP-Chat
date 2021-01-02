import {
  Pack,
  AsPack,
  AsString,
  AsInt16,
  AsInt32,
  AsBinary,
  AsByte,
} from "./defs/def";

function makeLoginPack(Un: string): Pack {
  @AsPack()
  class LoginPack extends Pack {
    constructor() {
      super();
    }
    
    @AsString("CMD.LOGIN")
    head;
    
    @AsString(Un)
    userName;

    @AsByte(0)
    footer;
  }
  return new LoginPack();
}

var f = makeLoginPack("1234");
console.log(f.getBuffer());
