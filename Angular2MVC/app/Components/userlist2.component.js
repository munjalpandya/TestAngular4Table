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
require("rxjs/add/observable/of");
var material_1 = require("@angular/material");
var userreport_component_1 = require("./userreport.component");
var UserList1Component = (function () {
    function UserList1Component(_userService, dialog) {
        this._userService = _userService;
        this.dialog = dialog;
    }
    UserList1Component.prototype.ngOnInit = function () {
        this.LoadUsers();
        //this.dataSource = new userDataSource(this._userService, this.paginator,Global.BASE_USER_ENDPOINT);
    };
    UserList1Component.prototype.LoadUsers = function () {
        var _this = this;
        var txtSearch = document.getElementById("txtSearch");
        var strSearchText;
        strSearchText = txtSearch.value;
        if (strSearchText == "") {
            strSearchText = "nodata";
        }
        this._userService.get(global_1.Global.BASE_USER_SEARCH_ENDPOINT + strSearchText).subscribe(function (x) { return _this.users = x; });
    };
    UserList1Component.prototype.MyDialog = function (model) {
        var dialogRef = this.dialog.open(userreport_component_1.UserReportComponent, {
            height: '400px',
            width: '600px',
        });
        dialogRef.componentInstance.users = model;
    };
    UserList1Component.prototype.search = function () {
        this.LoadUsers();
    };
    return UserList1Component;
}());
UserList1Component = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/userlist1.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, material_1.MdDialog])
], UserList1Component);
exports.UserList1Component = UserList1Component;
//# sourceMappingURL=userlist2.component.js.map