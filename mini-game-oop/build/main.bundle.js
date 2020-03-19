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
eval("\nexports.__esModule = true;\nvar Battle = /** @class */ (function () {\n    function Battle(player1, player2) {\n        this.player1 = player1;\n        this.player2 = player2;\n    }\n    Battle.prototype.startBattle = function () {\n        this.battle();\n        this.checkWinner();\n    };\n    // Refatorar esse código porco\n    Battle.prototype.battle = function () {\n        if (this.tossCoin()) {\n            while (this.player1.isAlive() && this.player2.isAlive()) {\n                if (this.player1.getLife() > 0) {\n                    this.player1.alive = true;\n                    var player1Damage = this.player1.getAtack();\n                    this.player2.takeDamage(player1Damage);\n                    console.log(this.player1.getName() + \" hit with \" + player1Damage + \".\");\n                    console.log(this.player2.getName() + \" total life: \" + this.player2.getLife() + \".\");\n                }\n                else {\n                    this.player1.alive = false;\n                    console.log(this.player1.getName() + \" is dead.\");\n                    break;\n                }\n                if (this.player2.getLife() > 0) {\n                    this.player2.alive = true;\n                    var player2Damage = this.player2.getAtack();\n                    this.player1.takeDamage(player2Damage);\n                    console.log(this.player2.getName() + \" hit with \" + player2Damage + \".\");\n                    console.log(this.player1.getName() + \"  total life: \" + this.player1.getLife() + \".\");\n                }\n                else {\n                    this.player2.alive = false;\n                    console.log(this.player2.getName() + \" is dead.\");\n                    break;\n                }\n            }\n        }\n        else {\n            while (this.player1.isAlive() && this.player2.isAlive()) {\n                if (this.player2.getLife() > 0) {\n                    this.player2.alive = true;\n                    var player2Damage = this.player2.getAtack();\n                    this.player1.takeDamage(player2Damage);\n                    console.log(this.player2.getName() + \" hit with \" + player2Damage + \".\");\n                    console.log(this.player1.getName() + \"  total life: \" + this.player1.getLife() + \".\");\n                }\n                else {\n                    this.player2.alive = false;\n                    console.log(this.player2.getName() + \" is dead.\");\n                    break;\n                }\n                if (this.player1.getLife() > 0) {\n                    this.player1.alive = true;\n                    var player1Damage = this.player1.getAtack();\n                    this.player2.takeDamage(player1Damage);\n                    console.log(this.player1.getName() + \" hit with \" + player1Damage + \".\");\n                    console.log(this.player2.getName() + \" total life: \" + this.player2.getLife() + \".\");\n                }\n                else {\n                    this.player1.alive = false;\n                    console.log(this.player1.getName() + \" is dead.\");\n                    break;\n                }\n            }\n        }\n    };\n    Battle.prototype.tossCoin = function () {\n        var coin = Math.floor(Math.random() * Math.floor(2));\n        if (coin) {\n            return true;\n        }\n        else {\n            return false;\n        }\n    };\n    Battle.prototype.checkWinner = function () {\n        if (this.player1.isAlive()) {\n            console.log(this.player1.getName() + \" Venceu !\");\n        }\n        else {\n            console.log(this.player2.getName() + \" Venceu !\");\n        }\n    };\n    return Battle;\n}());\nexports[\"default\"] = Battle;\n\n\n//# sourceURL=webpack:///./src/Battle.ts?");

/***/ }),

/***/ "./src/Char.ts":
/*!*********************!*\
  !*** ./src/Char.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Char = /** @class */ (function () {\n    function Char(name, life, power) {\n        this.alive = true;\n        this.name = name;\n        this.life = life;\n        this.power = power;\n    }\n    Char.prototype.getName = function () {\n        return this.name;\n    };\n    Char.prototype.getLife = function () {\n        return this.life;\n    };\n    Char.prototype.takeDamage = function (damage) {\n        this.life -= damage;\n        return damage;\n    };\n    Char.prototype.getAtack = function () {\n        var attack = Math.floor(Math.random() * Math.floor(this.power));\n        return attack;\n    };\n    Char.prototype.isAlive = function () {\n        if (this.alive) {\n            return true;\n        }\n        else {\n            return false;\n        }\n    };\n    return Char;\n}());\nexports[\"default\"] = Char;\n\n\n//# sourceURL=webpack:///./src/Char.ts?");

/***/ }),

/***/ "./src/Elf.ts":
/*!********************!*\
  !*** ./src/Elf.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar Char_1 = __webpack_require__(/*! ./Char */ \"./src/Char.ts\");\nvar Elf = /** @class */ (function (_super) {\n    __extends(Elf, _super);\n    function Elf(name, life, power) {\n        return _super.call(this, name, life, power) || this;\n    }\n    return Elf;\n}(Char_1[\"default\"]));\nexports[\"default\"] = Elf;\n\n\n//# sourceURL=webpack:///./src/Elf.ts?");

/***/ }),

/***/ "./src/Human.ts":
/*!**********************!*\
  !*** ./src/Human.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar Char_1 = __webpack_require__(/*! ./Char */ \"./src/Char.ts\");\nvar Human = /** @class */ (function (_super) {\n    __extends(Human, _super);\n    function Human(name, life, power) {\n        return _super.call(this, name, life, power) || this;\n    }\n    return Human;\n}(Char_1[\"default\"]));\nexports[\"default\"] = Human;\n\n\n//# sourceURL=webpack:///./src/Human.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar Human_1 = __webpack_require__(/*! ./Human */ \"./src/Human.ts\");\nvar Elf_1 = __webpack_require__(/*! ./Elf */ \"./src/Elf.ts\");\nvar Battle_1 = __webpack_require__(/*! ./Battle */ \"./src/Battle.ts\");\nvar warrior = new Human_1[\"default\"]('Warrior', 100, 25);\nvar archer = new Elf_1[\"default\"]('Archer', 100, 25);\nvar battle = new Battle_1[\"default\"](warrior, archer);\nbattle.startBattle();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });