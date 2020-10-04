function identity<T>(arg: T): T {
  return arg
}

// explicitly set type
let output = identity<string>("string")
// console.log(output)

// type argument inference
let output2 = identity("string")
// console.log(output2)

function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}

// let myIdentity: T(arg: T) => T = identity

interface GenericIdentityFn {
  <T>(arg: T): T
}

interface GenericIdentityFnParameter<T> {
  (arg: T): T
}

let myIdentity: GenericIdentityFn = identity
let otherIdentity: GenericIdentityFnParameter<number> = identity

//console.log(otherIdentity(2))

class GenericNumber<T> {
  x: T
  y: T
  doMath: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()

myGenericNumber.doMath = (x, y) => x * y
myGenericNumber.x = 10
myGenericNumber.y = 5

// console.log(myGenericNumber.doMath(myGenericNumber.x, myGenericNumber.y))

class GenericString<U> {
  a: U
  b: U
  concat: (a: U, b: U) => U
}

let myGenericString = new GenericString<string>()

myGenericString.concat = (a, b) => a + b

// console.log(myGenericString.concat("vini", "cius"))

interface Lengthwise {
  length: string
}

function loggingConstrant<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

// loggingConstrant({ length: "length" })

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

let obj = { a: 1, b: 2, c: 3 }

// console.log(getProperty(obj, "c"))

class Animal {
  name: string
}

class TRex extends Animal {
  armSize: number
}

class Turtle extends Animal {
  speed: number
}

class Tamer {
  name: string
  animal: Animal
}

function createInstance<I extends Animal>(a: new () => I): I {
  return new a()
}

// console.log(createInstance(TRex).armSize)
// console.log(createInstance(Turtle).speed)
