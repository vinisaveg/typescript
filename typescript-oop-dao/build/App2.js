"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = __importDefault(require("./Car"));
var Bike_1 = __importDefault(require("./Bike"));
var carA = new Car_1.default('Lexus', 6);
var bikeA = new Bike_1.default();
bikeA.speedUp();
console.log(bikeA);
carA.speedUp();
console.log(carA);
