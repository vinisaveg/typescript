import Car from './Car'
import DealerShip from './DealerShip'
import Person from './Person'

// Cars Factory 
let carA = new Car('Lexus', 2)
let carB = new Car('Mercedes Benz', 4)
let carC = new Car('Uno', 2)

let carsList: Array<Car> = [carA, carB, carC]
// let carsList: Car[]= [carA, carB, carC]

// Building a dealership
let dealerShipA = new DealerShip('Avenida Paulista, 3300 - São Paulo, SP', carsList)

// Show cars list
// console.log(dealerShipA.showCarList())

// Creating a person
let client = new Person('Anthony', 'Mercedes Benz')

// Show client's fav car
// console.log(client.sayFavCar())

// Searching for client car and buying it
dealerShipA.showCarList().map((car: Car) => {
    
    switch(car['model']){

        case 'Mercedes Benz':
            client.buyCar(car)
            break

    }
})

console.log(client.showCar())