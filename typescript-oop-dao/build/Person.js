"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, favCar) {
        this.name = name;
        this.favCar = favCar;
    }
    Person.prototype.sayName = function () {
        return this.name;
    };
    Person.prototype.sayFavCar = function () {
        return this.favCar;
    };
    Person.prototype.buyCar = function (car) {
        this.car = car;
    };
    Person.prototype.showCar = function () {
        return this.car;
    };
    return Person;
}());
exports.default = Person;
