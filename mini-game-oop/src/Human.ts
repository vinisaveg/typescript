import Char from './Char'

class Human extends Char{

    public weapon: string
    protected level

    constructor(name: string, life: number, power: number){     
        super(name, life, power)

    }
 

}

export default Human