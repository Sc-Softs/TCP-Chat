import {
  Pack,
  AsPack,
  AsString,
  AsInt16,
  AsInt32,
  AsBinary,
  AsByte,
} from "./defs/def";

function makeLoginPack(Un: string,password?:Buffer): Pack {
  @AsPack()
  class LoginPack extends Pack {
    constructor() {
      super();
    }
    
    @AsString("CMD.LOGIN")
    head;
    
    @AsString(Un)
    userName;

    @AsBinary(password)
    password;
    
    @AsByte(0)
    footer;
  }
  return new LoginPack();
}
import {createHash} from "crypto";
const md5 = createHash("md5");
const passoword = md5.update("1234").digest();
var f = makeLoginPack("1234",passoword);
console.log(f.getBuffer());
