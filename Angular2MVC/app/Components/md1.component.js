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
var MD1 = (function () {
    function MD1(_fb, _userService) {
        this._fb = _fb;
        this._userService = _userService;
    }
    MD1.prototype.ngOnInit = function () {
        this.userFrm = this._fb.group({
            DeptID: [''],
            DeptName: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(50)]],
            Employees: this._fb.array([
                this.initEmployees(),
            ])
        });
    };
    MD1.prototype.initEmployees = function () {
        return this._fb.group({
            EmpID: [''],
            EmpName: ['', forms_1.Validators.required],
            DeptID: [''],
            Salary: ['']
        });
    };
    MD1.prototype.addEmployee = function () {
        var control = this.userFrm.controls['Employees'];
        control.push(this.initEmployees());
    };
    MD1.prototype.removeAddress = function (i) {
        var control = this.userFrm.controls['Employees'];
        control.removeAt(i);
    };
    MD1.prototype.save = function (model) {
        // call API to save
        // ...
        console.log(model);
        //console.log("Json Model: " + model.json());
        console.log(JSON.stringify(model._value));
        this._userService.masterdetail(global_1.Global.BASE_MASTERDETAIL_ENDPOINT, model).subscribe();
    };
    return MD1;
}());
MD1 = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/md1.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
], MD1);
exports.MD1 = MD1;
//# sourceMappingURL=md1.component.js.map