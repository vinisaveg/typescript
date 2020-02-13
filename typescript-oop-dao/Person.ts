import Car from './Car'

class Person {

    private name: string
    private favCar: string
    private car: Car

    constructor(name: string, favCar: string){

        this.name = name 
        this.favCar = favCar

    }

    public sayName(): string {

        return this.name

    }

    public sayFavCar(): string {

        return this.favCar

    }

    public buyCar(car: Car): void{

        this.car = car

    }

    public showCar(): Car {

        return this.car

    }

}

export default Person