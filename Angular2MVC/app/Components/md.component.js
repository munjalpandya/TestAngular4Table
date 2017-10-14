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
var forms_1 = require("@angular/forms");
var global_1 = require("../Shared/global");
var user_service_1 = require("../Service/user.service");
var MD = (function () {
    function MD(_fb, _userService) {
        this._fb = _fb;
        this._userService = _userService;
    }
    MD.prototype.ngOnInit = function () {
        this.userFrm = this._fb.group({
            DeptID: [''],
            DeptName: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(50)]],
            Employees: this._fb.array([
                this.initEmployees(),
            ])
        });
    };
    MD.prototype.initEmployees = function () {
        return this._fb.group({
            EmpID: [''],
            EmpName: ['', forms_1.Validators.required],
            DeptID: [''],
            Salary: ['']
        });
    };
    MD.prototype.addEmployee = function () {
        var control = this.userFrm.controls['Employees'];
        control.push(this.initEmployees());
    };
    MD.prototype.removeAddress = function (i) {
        var control = this.userFrm.controls['Employees'];
        control.removeAt(i);
    };
    MD.prototype.save = function (model) {
        // call API to save
        // ...
        console.log(model);
        //console.log("Json Model: " + model.json());
        console.log(JSON.stringify(model._value));
        this._userService.masterdetail(global_1.Global.BASE_MASTERDETAIL_ENDPOINT, model).subscribe();
    };
    return MD;
}());
MD = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/md.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
], MD);
exports.MD = MD;
//# sourceMappingURL=md.component.js.map