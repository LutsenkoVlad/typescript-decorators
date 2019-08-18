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
var decorators_1 = require("./decorators");
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function () {
        var number = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            number[_i] = arguments[_i];
        }
        return number.reduce(function (total, current) { return total + current; });
    };
    __decorate([
        decorators_1.memoize,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Calculator.prototype, "add", null);
    return Calculator;
}());
var calculator = new Calculator();
var calculator2 = new Calculator();
console.log(calculator.add(1, 2, 4, 5));
console.log(calculator.add(1, 2, 4, 5));
console.log(calculator2.add(1, 2, 4, 5));
//# sourceMappingURL=index.js.map