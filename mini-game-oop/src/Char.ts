class Char {

    public name: string
    public life: number
    public power: number
    public alive: boolean = true

    constructor(name: string, life: number, power: number){
        this.name = name
        this.life = life
        this.power = power
    }

    public getName(): string{
        return this.name
    }

    public getLife(): number{
        return this.life
    }

    public takeDamage(damage): number{
        this.life -= damage
        return damage
    }

    getAtack(): number{
        let attack: number = Math.floor(Math.random() * Math.floor(this.power));
        return attack

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