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
var SliderComponent = (function () {
    function SliderComponent() {
        this.items = [];
        this.items = [
            { name: '../../images/02.jpg' },
            { name: '../../images/03.jpg' },
            { name: '../../images/04.jpg' },
            { name: '../../images/05.jpg' },
            { name: '../../images/06.jpg' },
            { name: '../../images/07.jpg' }
        ];
    }
    return SliderComponent;
}());
SliderComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/slider.component.html'
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);
exports.SliderComponent = SliderComponent;