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
var forms_1 = require("@angular/forms");
var global_1 = require("../Shared/global");
require("rxjs/add/operator/startWith");
require("rxjs/add/operator/map");
var AutoCompleteExample = (function () {
    function AutoCompleteExample(_userService, fb) {
        this._userService = _userService;
        this.fb = fb;
        //this.deptCtrl = new FormControl();
    }
    AutoCompleteExample.prototype.ngOnInit = function () {
        this.userFrm = this.fb.group({
            Dept: [''],
            Emp: [''],
            Salary: ['']
        });
        this.LoadDept();
    };
    AutoCompleteExample.prototype.LoadDept = function () {
        var _this = this;
        this._userService.get(global_1.Global.BASE_ALLDEPT_ENDPOINT)
            .subscribe(function (depts) {
            _this.depts = depts;
            _this.filteredDepts = _this.userFrm.controls["Dept"].valueChanges
                .startWith(null)
                .map(function (dept) { return dept ? _this.filterDept(dept) : _this.depts.slice(); });
        });
    };
    AutoCompleteExample.prototype.filterDept = function (DeptName) {
        //DeptName = DeptName ? DeptName.toLocaleLowerCase() : null;
        //console.log("Depts: "+ this.depts);
        return this.depts.filter(function (dept) { return dept.DeptName.toLowerCase().indexOf(DeptName.toLowerCase()) === 0; });
    };
    AutoCompleteExample.prototype.SelectDept = function (event, DeptID) {
        if (event.source.selected) {
            //console.log("Dept ID Selected: " + DeptID);
            this.selectedDept = DeptID;
            this.userFrm.controls["Emp"].setValue("");
            this.LoadEmp(DeptID);
        }
    };
    AutoCompleteExample.prototype.LoadEmp = function (Id) {
        var _this = this;
        this._userService.getById(global_1.Global.BASE_EMPBYDEPT_ENDPOINT, Id)
            .subscribe(function (emps) {
            _this.emps = emps;
            _this.filteredEmps = _this.userFrm.controls["Emp"].valueChanges
                .startWith(null)
                .map(function (emp) { return emp ? _this.filterEmp(emp) : _this.emps.slice(); });
        });
    };
    AutoCompleteExample.prototype.filterEmp = function (EmpName) {
        return this.emps.filter(function (emp) { return emp.EmpName.toLowerCase().indexOf(EmpName.toLowerCase()) === 0; });
    };
    AutoCompleteExample.prototype.SelectEmp = function (event, Emp) {
        if (event.source.selected) {
            //console.log("Emp ID Selected: " + Emp.EmpID);
            //console.log("Salary of Selected: " + Emp.Salary);
            this.selectedEmp = Emp.EmpID.toString();
            this.userFrm.controls["Salary"].setValue(Emp.Salary);
        }
    };
    AutoCompleteExample.prototype.save = function () {
        console.log("Selected Dept: " + this.selectedDept);
        console.log("Selected Emp: " + this.selectedEmp);
    };
    return AutoCompleteExample;
}());
AutoCompleteExample = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/autocompleteexample.component.html',
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, forms_1.FormBuilder])
], AutoCompleteExample);
exports.AutoCompleteExample = AutoCompleteExample;
//# sourceMappingURL=autocompleteexample.component.js.map