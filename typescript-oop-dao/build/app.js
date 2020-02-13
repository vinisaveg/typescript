"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = __importDefault(require("./Car"));
var DealerShip_1 = __importDefault(require("./DealerShip"));
var Person_1 = __importDefault(require("./Person"));
// Cars Factory 
var carA = new Car_1.default('Lexus', 2);
var carB = new Car_1.default('Mercedes Benz', 4);
var carC = new Car_1.default('Uno', 2);
var carsList = [carA, carB, carC];
// let carsList: Car[]= [carA, carB, carC]
// Building a dealership
var dealerShipA = new DealerShip_1.default('Avenida Paulista, 3300 - São Paulo, SP', carsList);
// Show cars list
// console.log(dealerShipA.showCarList())
// Creating a person
var client = new Person_1.default('Anthony', 'Mercedes Benz');
// Show client's fav car
// console.log(client.sayFavCar())
// Searching for client car and buying it
dealerShipA.showCarList().map(function (car) {
    switch (car['model']) {
        case 'Mercedes Benz':
            client.buyCar(car);
            break;
    }
});
console.log(client.showCar());
