import Char from './Char'

class Battle {

    player1: Char
    player2: Char

    constructor(player1: Char, player2: Char){
        this.player1 = player1
        this.player2 = player2
    }

    startBattle(){
        this.battle()
        this.checkWinner()

    }

    // Refatorar esse código porco
    battle(): void{
        if(this.tossCoin()){

            while(this.player1.isAlive() && this.player2.isAlive()){

                if(this.player1.getLife() > 0){
                    this.player1.alive = true
                    let player1Damage = this.player1.getAtack()
                    this.player2.takeDamage(player1Damage)
    
                    console.log(`${this.player1.getName()} hit with ${player1Damage}.`)
                    console.log(`${this.player2.getName()} total life: ${this.player2.getLife()}.`)

                }else{
                    this.player1.alive = false
                    console.log(`${this.player1.getName()} is dead.`)
                    break

                }

                if(this.player2.getLife() > 0){
                    this.player2.alive = true
                    let player2Damage = this.player2.getAtack()
                    this.player1.takeDamage(player2Damage)
    
                    console.log(`${this.player2.getName()} hit with ${player2Damage}.`)
                    console.log(`${this.player1.getName()}  total life: ${this.player1.getLife()}.`)

                }else{
                    this.player2.alive = false
                    console.log(`${this.player2.getName()} is dead.`)
                    break
                }


            }

        }else{
            while(this.player1.isAlive() && this.player2.isAlive()){

                if(this.player2.getLife() > 0){
                    this.player2.alive = true
                    let player2Damage = this.player2.getAtack()
                    this.player1.takeDamage(player2Damage)
    
                    console.log(`${this.player2.getName()} hit with ${player2Damage}.`)
                    console.log(`${this.player1.getName()}  total life: ${this.player1.getLife()}.`)

                }else{
                    this.player2.alive = false
                    console.log(`${this.player2.getName()} is dead.`)
                    break
                }


                if(this.player1.getLife() > 0){
                    this.player1.alive = true
                    let player1Damage = this.player1.getAtack()
                    this.player2.takeDamage(player1Damage)
    
                    console.log(`${this.player1.getName()} hit with ${player1Damage}.`)
                    console.log(`${this.player2.getName()} total life: ${this.player2.getLife()}.`)

                }else{
                    this.player1.alive = false
                    console.log(`${this.player1.getName()} is dead.`)
                    break

                }


            }

        }

    }

    tossCoin(): boolean{
        let coin: number = Math.floor(Math.random() * Math.floor(2));
        
        if(coin){
            return true

        }else{
            return false

        }
    }

    checkWinner(){
        if(this.player1.isAlive()){
            console.log(`${this.player1.getName()} Venceu !`)

        }else{
            console.log(`${this.player2.getName()} Venceu !`)

        }
    }

}

export default Battle