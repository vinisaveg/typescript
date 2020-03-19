class Char {

    public name: string
    public life: number
    public alive: boolean
    public power: number

    constructor(name: string, life: number, power: number){
        this.name = name
        this.life = life
        this.power = power
    }

    public getLife(): number{
        return this.life
    }

    public takeDamage(damage): number{
        this.life -= damage
        return damage
    }

    public isAlive(): boolean{
        if(this.alive){
            return true

        }else{
            return false

        }
    }

}

export default Char