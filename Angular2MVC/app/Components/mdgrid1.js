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
var MDGrid1 = (function () {
    function MDGrid1(_userService) {
        this._userService = _userService;
        this.isREADONLY = false;
        this.totalRecords = 0;
        this.columns = [
            {
                display: 'Dept Name',
                variable: 'DeptName'
            }
        ];
        this.detcolumns = [
            {
                display: 'Emp Name',
                variable: 'EmpName'
            },
            {
                display: 'Salary',
                variable: 'Salary'
            }
        ];
        this.sorting = {
            column: 'DeptName',
            descending: false
        };
        this.hdrbtns = [];
        this.gridbtns = [];
    }
    MDGrid1.prototype.initGridButton = function () {
        this.hdrbtns = [
            {
                title: 'Add',
                keys: [''],
                //                action: DBOperation.create,
                ishide: this.isREADONLY
            }
        ];
        this.gridbtns = [
            {
                title: 'Edit',
                keys: ['DeptID'],
                //                action: DBOperation.update,
                ishide: this.isREADONLY
            }
        ];
    };
    MDGrid1.prototype.ngOnInit = function () {
        this.LoadDept();
        //console.log("Users - user class: " + this.users.toString);
    };
    MDGrid1.prototype.LoadDept = function () {
        var _this = this;
        debugger;
        this._userService.get(global_1.Global.BASE_DEPT_ENDPOINT)
            .subscribe(function (depts) { _this.depts = depts; _this.initGridButton(); _this.totalRecords = depts.length; });
    };
    return MDGrid1;
}());
MDGrid1 = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/mdgrid1.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], MDGrid1);
exports.MDGrid1 = MDGrid1;
