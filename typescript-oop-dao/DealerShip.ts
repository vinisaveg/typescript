import Car from './Car'
import DealerShipInterface from './DealerShipInterface'

class DealerShip implements DealerShipInterface{

    private address: string
    private carsList: Array<Car>

    constructor(address: string, carsList: Array<Car>){

         this.address = address
         this.carsList = carsList

    }

    public getAddress(): string{

        return this.address

    }

    public showCarList(): Array<Car> {

        return this.carsList

    }

    public businessHours(): string {
        return '24/7'
    }

}

export default DealerShip