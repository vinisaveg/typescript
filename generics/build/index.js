"use strict";
function identity(arg) {
    return arg;
}
// explicitly set type
let output = identity("string");
// console.log(output)
// type argument inference
let output2 = identity("string");
// console.log(output2)
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
let myIdentity = identity;
let otherIdentity = identity;
//console.log(otherIdentity(2))
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.doMath = (x, y) => x * y;
myGenericNumber.x = 10;
myGenericNumber.y = 5;
// console.log(myGenericNumber.doMath(myGenericNumber.x, myGenericNumber.y))
class GenericString {
}
let myGenericString = new GenericString();
myGenericString.concat = (a, b) => a + b;
function loggingConstrant(arg) {
    console.log(arg.length);
    return arg;
}
// loggingConstrant({ length: "length" })
function getProperty(obj, key) {
    return obj[key];
}
let obj = { a: 1, b: 2, c: 3 };
// console.log(getProperty(obj, "c"))
class Animal {
}
class TRex extends Animal {
}
class Turtle extends Animal {
}
class Tamer {
}
function createInstance(a) {
    return new a();
}
// console.log(createInstance(TRex).armSize)
// console.log(createInstance(Turtle).speed)
