import Vehicle from './Vehicle'

export default class Bike extends Vehicle{

    public speedUp(): void {
        this.speed = this.speed + 20
    }

}