"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const def_1 = require("./defs/def");
function makeLoginPack(Un, password) {
    let LoginPack = class LoginPack extends def_1.Pack {
        constructor() {
            super();
        }
    };
    __decorate([
        def_1.AsString("CMD.LOGIN")
    ], LoginPack.prototype, "head", void 0);
    __decorate([
        def_1.AsString(Un)
    ], LoginPack.prototype, "userName", void 0);
    __decorate([
        def_1.AsBinary(password)
    ], LoginPack.prototype, "password", void 0);
    __decorate([
        def_1.AsByte(0)
    ], LoginPack.prototype, "footer", void 0);
    LoginPack = __decorate([
        def_1.AsPack()
    ], LoginPack);
    return new LoginPack();
}
const crypto_1 = require("crypto");
const md5 = crypto_1.createHash("md5");
const passoword = md5.update("1234").digest();
var f = makeLoginPack("1234", passoword);
console.log(f.getBuffer());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdG9jb2wuanMiLCJzb3VyY2VSb290IjoiLi9wcm90b2NvbC8iLCJzb3VyY2VzIjpbInByb3RvY29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsb0NBUW9CO0FBRXBCLFNBQVMsYUFBYSxDQUFDLEVBQVUsRUFBQyxRQUFnQjtJQUVoRCxJQUFNLFNBQVMsR0FBZixNQUFNLFNBQVUsU0FBUSxVQUFJO1FBQzFCO1lBQ0UsS0FBSyxFQUFFLENBQUM7UUFDVixDQUFDO0tBYUYsQ0FBQTtJQVZDO1FBREMsY0FBUSxDQUFDLFdBQVcsQ0FBQzsyQ0FDakI7SUFHTDtRQURDLGNBQVEsQ0FBQyxFQUFFLENBQUM7K0NBQ0o7SUFHVDtRQURDLGNBQVEsQ0FBQyxRQUFRLENBQUM7K0NBQ1Y7SUFHVDtRQURDLFlBQU0sQ0FBQyxDQUFDLENBQUM7NkNBQ0g7SUFmSCxTQUFTO1FBRGQsWUFBTSxFQUFFO09BQ0gsU0FBUyxDQWdCZDtJQUNELE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBQ0QsbUNBQWtDO0FBQ2xDLE1BQU0sR0FBRyxHQUFHLG1CQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM5QyxJQUFJLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMifQ==