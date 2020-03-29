/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Battle.ts":
/*!***********************!*\
  !*** ./src/Battle.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar Battle = /** @class */ (function () {\r\n    function Battle(player1, player2) {\r\n        this.player1 = player1;\r\n        this.player2 = player2;\r\n    }\r\n    Battle.prototype.startBattle = function () {\r\n        this.battle();\r\n    };\r\n    Battle.prototype.battle = function () {\r\n        var headsOrTails = this.tossCoin();\r\n        if (headsOrTails) {\r\n            this.fight(this.player1, this.player2);\r\n        }\r\n        else {\r\n            this.fight(this.player2, this.player1);\r\n        }\r\n        this.checkWinner();\r\n    };\r\n    Battle.prototype.fight = function (firstPlayer, secondPlayer) {\r\n        while (firstPlayer.isAlive() && secondPlayer.isAlive()) {\r\n            this.fightAtacks(firstPlayer, secondPlayer);\r\n            this.fightAtacks(secondPlayer, firstPlayer);\r\n        }\r\n    };\r\n    Battle.prototype.fightAtacks = function (attackingPlayer, defendingPlayer) {\r\n        if (attackingPlayer.getLife() > 0 && defendingPlayer.getLife() > 0) {\r\n            attackingPlayer.alive = true;\r\n            var attakingPlayerDamage = attackingPlayer.getAtack();\r\n            defendingPlayer.takeDamage(attakingPlayerDamage);\r\n            console.log(attackingPlayer.getName() + \" hit with \" + attakingPlayerDamage + \".\");\r\n            console.log(defendingPlayer.getName() + \" total life: \" + defendingPlayer.getLife() + \".\");\r\n        }\r\n        else {\r\n            attackingPlayer.alive = false;\r\n            console.log(attackingPlayer.getName() + \" is dead.\");\r\n        }\r\n    };\r\n    Battle.prototype.tossCoin = function () {\r\n        var coin = Math.floor(Math.random() * Math.floor(2));\r\n        if (coin) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    };\r\n    Battle.prototype.checkWinner = function () {\r\n        if (this.player1.isAlive()) {\r\n            console.log(this.player1.getName() + \" Venceu !\");\r\n        }\r\n        else {\r\n            console.log(this.player2.getName() + \" Venceu !\");\r\n        }\r\n    };\r\n    return Battle;\r\n}());\r\nexports[\"default\"] = Battle;\r\n\n\n//# sourceURL=webpack:///./src/Battle.ts?");

/***/ }),

/***/ "./src/Char.ts":
/*!*********************!*\
  !*** ./src/Char.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar Char = /** @class */ (function () {\r\n    function Char(name, life, power) {\r\n        this.alive = true;\r\n        this.name = name;\r\n        this.life = life;\r\n        this.power = power;\r\n    }\r\n    Char.prototype.getName = function () {\r\n        return this.name;\r\n    };\r\n    Char.prototype.getLife = function () {\r\n        return this.life;\r\n    };\r\n    Char.prototype.takeDamage = function (damage) {\r\n        this.life -= damage;\r\n        return damage;\r\n    };\r\n    Char.prototype.getAtack = function () {\r\n        var attack = Math.floor(Math.random() * Math.floor(this.power));\r\n        return attack;\r\n    };\r\n    Char.prototype.isAlive = function () {\r\n        if (this.alive) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    };\r\n    return Char;\r\n}());\r\nexports[\"default\"] = Char;\r\n\n\n//# sourceURL=webpack:///./src/Char.ts?");

/***/ }),

/***/ "./src/Elf.ts":
/*!********************!*\
  !*** ./src/Elf.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nexports.__esModule = true;\r\nvar Char_1 = __webpack_require__(/*! ./Char */ \"./src/Char.ts\");\r\nvar Elf = /** @class */ (function (_super) {\r\n    __extends(Elf, _super);\r\n    function Elf(name, life, power, magic) {\r\n        var _this = _super.call(this, name, life, power) || this;\r\n        _this.magic = magic;\r\n        return _this;\r\n    }\r\n    Elf.prototype.resolveMagic = function (magic) {\r\n        switch (magic) {\r\n            case 'fire': {\r\n                return 2;\r\n                break;\r\n            }\r\n            case 'water': {\r\n                return 1;\r\n                break;\r\n            }\r\n            case 'air': {\r\n                return 1;\r\n                break;\r\n            }\r\n            default: {\r\n                return 0;\r\n                break;\r\n            }\r\n        }\r\n    };\r\n    return Elf;\r\n}(Char_1[\"default\"]));\r\nexports[\"default\"] = Elf;\r\n\n\n//# sourceURL=webpack:///./src/Elf.ts?");

/***/ }),

/***/ "./src/Human.ts":
/*!**********************!*\
  !*** ./src/Human.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nexports.__esModule = true;\r\nvar Char_1 = __webpack_require__(/*! ./Char */ \"./src/Char.ts\");\r\nvar Human = /** @class */ (function (_super) {\r\n    __extends(Human, _super);\r\n    function Human(name, life, power) {\r\n        return _super.call(this, name, life, power) || this;\r\n    }\r\n    return Human;\r\n}(Char_1[\"default\"]));\r\nexports[\"default\"] = Human;\r\n\n\n//# sourceURL=webpack:///./src/Human.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nexports.__esModule = true;\r\nvar Human_1 = __webpack_require__(/*! ./Human */ \"./src/Human.ts\");\r\nvar Elf_1 = __webpack_require__(/*! ./Elf */ \"./src/Elf.ts\");\r\nvar Battle_1 = __webpack_require__(/*! ./Battle */ \"./src/Battle.ts\");\r\nvar warrior = new Human_1[\"default\"]('Warrior', 100, 25);\r\nvar archer = new Elf_1[\"default\"]('Archer', 100, 25, 'fire');\r\nvar battle = new Battle_1[\"default\"](warrior, archer);\r\nbattle.startBattle();\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });