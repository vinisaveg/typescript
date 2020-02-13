"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DealerShip = /** @class */ (function () {
    function DealerShip(address, carsList) {
        this.address = address;
        this.carsList = carsList;
    }
    DealerShip.prototype.getAddress = function () {
        return this.address;
    };
    DealerShip.prototype.showCarList = function () {
        return this.carsList;
    };
    DealerShip.prototype.businessHours = function () {
        return '24/7';
    };
    return DealerShip;
}());
exports.default = DealerShip;
