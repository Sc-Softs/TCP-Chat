"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const def_1 = require("./defs/def");
function makeLoginPack(Un) {
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
        def_1.AsByte(0)
    ], LoginPack.prototype, "footer", void 0);
    LoginPack = __decorate([
        def_1.AsPack()
    ], LoginPack);
    return new LoginPack();
}
var f = makeLoginPack("1234");
console.log(f.getBuffer());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdG9jb2wuanMiLCJzb3VyY2VSb290IjoiLi9wcm90b2NvbC8iLCJzb3VyY2VzIjpbInByb3RvY29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsb0NBUW9CO0FBRXBCLFNBQVMsYUFBYSxDQUFDLEVBQVU7SUFFL0IsSUFBTSxTQUFTLEdBQWYsTUFBTSxTQUFVLFNBQVEsVUFBSTtRQUMxQjtZQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1YsQ0FBQztLQVVGLENBQUE7SUFQQztRQURDLGNBQVEsQ0FBQyxXQUFXLENBQUM7MkNBQ2pCO0lBR0w7UUFEQyxjQUFRLENBQUMsRUFBRSxDQUFDOytDQUNKO0lBR1Q7UUFEQyxZQUFNLENBQUMsQ0FBQyxDQUFDOzZDQUNIO0lBWkgsU0FBUztRQURkLFlBQU0sRUFBRTtPQUNILFNBQVMsQ0FhZDtJQUNELE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBRUQsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMifQ==