"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../Service/user.service");
var global_1 = require("../Shared/global");
var AdminHeaderComponent = (function () {
    function AdminHeaderComponent(_userService) {
        this._userService = _userService;
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
        this.LoadMenus();
    };
    AdminHeaderComponent.prototype.LoadMenus = function () {
        var _this = this;
        this._userService.get(global_1.Global.BASE_MENU_ENDPOINT)
            .subscribe(function (menus) { _this.menus = menus; });
    };
    return AdminHeaderComponent;
}());
AdminHeaderComponent = __decorate([
    core_1.Component({
        selector: 'admin-header',
        templateUrl: 'app/Components/adminheader.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AdminHeaderComponent);
exports.AdminHeaderComponent = AdminHeaderComponent;
//# sourceMappingURL=adminheader.component.js.map