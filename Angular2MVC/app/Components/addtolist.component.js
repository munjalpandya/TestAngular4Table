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
var user_service_1 = require("../Service/user.service");
var AddToList = (function () {
    function AddToList(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.fieldArray = [];
        this.fieldArray1 = [];
        this.newAttribute = {};
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
            'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
            'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
            'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
    }
    AddToList.prototype.filterStates = function (val) {
        return val ? this.states.filter(function (s) { return new RegExp("^" + val, 'gi').test(s); })
            : this.states;
    };
    AddToList.prototype.ngOnInit = function () {
        var _this = this;
        this.userFrm = this.fb.group({
            newAttributeCode: [''],
            newAttributeName: [''],
            newAttributePrice: ['']
        });
        this.filteredStates = this.userFrm.controls["newAttributeCode"].valueChanges.startWith(null).map(function (name) { return _this.filterStates(name); });
        this.userFrm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    AddToList.prototype.onValueChanged = function (data) {
        if (!this.userFrm) {
            return;
        }
        var form = this.userFrm;
    };
    AddToList.prototype.addFieldValue = function () {
        this.fieldArray.push(this.newAttribute);
        this.newAttribute = {};
        //console.log(this.fieldArray);
    };
    AddToList.prototype.deleteFieldValue = function (index) {
        this.fieldArray.splice(index, 1);
    };
    AddToList.prototype.save = function (formData) {
        //console.log(JSON.stringify(this.fieldArray));
        this.fieldArray1.push(formData);
        console.log("Raw Form Data: " + formData);
        console.log("Form Data Array: " + this.fieldArray1);
        //this._userService.masterdetail(Global.BASE_MASTERDETAIL_ENDPOINT, this.fieldArray).subscribe();
    };
    return AddToList;
}());
AddToList = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/addtolist.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
], AddToList);
exports.AddToList = AddToList;
//# sourceMappingURL=addtolist.component.js.map