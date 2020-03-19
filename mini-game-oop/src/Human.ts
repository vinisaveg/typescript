import Char from './Char'

class Human extends Char{

    public weapon: string
    protected level

    constructor(name: string, life: number, power: number){     
        super(name, life, power)

    }

    getAtack(): number{
        let attack: number = Math.floor(Math.random() * Math.floor(this.power));
        return attack

    }
 

}

export default Human