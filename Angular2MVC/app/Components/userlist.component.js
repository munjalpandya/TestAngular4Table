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
var material_1 = require("@angular/material");
require("rxjs/add/observable/of");
var userdatasource_1 = require("./userdatasource");
var UserListComponent = (function () {
    function UserListComponent(_userService, dialog) {
        this._userService = _userService;
        this.dialog = dialog;
        this.displayedColumns = ['FirstName', 'LastName', 'Gender', 'DOB'];
        this.columns = [
            {
                display: 'First Name',
                variable: 'FirstName',
                filter: 'text',
            },
            {
                display: 'Last Name',
                variable: 'LastName',
                filter: 'text'
            },
            {
                display: 'Gender',
                variable: 'Gender',
                filter: 'text'
            },
            {
                display: 'Date of Birth',
                variable: 'DOB',
                filter: 'date'
            }
        ];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.LoadUsers();
        //this.dataSource = new userDataSource(this._userService, this.paginator,Global.BASE_USER_ENDPOINT);
    };
    UserListComponent.prototype.LoadUsers = function () {
        this.dataSource = new userdatasource_1.userDataSource(this._userService, global_1.Global.BASE_USER_ENDPOINT, this.sort);
    };
    return UserListComponent;
}());
__decorate([
    core_1.ViewChild(material_1.MdPaginator),
    __metadata("design:type", material_1.MdPaginator)
], UserListComponent.prototype, "paginator", void 0);
__decorate([
    core_1.ViewChild(material_1.MdSort),
    __metadata("design:type", material_1.MdSort)
], UserListComponent.prototype, "sort", void 0);
UserListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/userlist.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, material_1.MdDialog])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=userlist.component.js.map