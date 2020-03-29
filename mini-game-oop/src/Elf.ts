import Char from './Char'

class Elf extends Char {

    public magic: string

    constructor(name: string, life:number, power: number, magic: string){
        super(name, life, power)
        this.magic = magic
        
    }

    public resolveMagic(magic: string): number{
        switch(magic){
            case 'fire':{
                return 2
                break
            }
            case 'water':{
                return 1
                break
            }
            case 'air':{
                return 1
                break
            }
            default: {
                return 0
                break
            }
        }

    }

}

export default Elf