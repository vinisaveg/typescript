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

    }

    battle(): void{
        let headsOrTails = this.tossCoin()

        if(headsOrTails){
            this.fight(this.player1, this.player2)

        }else{
            this.fight(this.player2, this.player1)

        }

        this.checkWinner()

    }

    fight(firstPlayer: Char, secondPlayer: Char): void{
        while(firstPlayer.isAlive() && secondPlayer.isAlive()){
            this.fightAtacks(firstPlayer, secondPlayer)
            this.fightAtacks(secondPlayer, firstPlayer)     

        }
    }

    fightAtacks(attackingPlayer: Char, defendingPlayer: Char){
        if(attackingPlayer.getLife() > 0 && defendingPlayer.getLife() > 0){
            attackingPlayer.alive = true
            let attakingPlayerDamage = attackingPlayer.getAtack()
            defendingPlayer.takeDamage(attakingPlayerDamage)

            console.log(`${attackingPlayer.getName()} hit with ${attakingPlayerDamage}.`)
            console.log(`${defendingPlayer.getName()} total life: ${defendingPlayer.getLife()}.`)

        }else{
            attackingPlayer.alive = false
            console.log(`${attackingPlayer.getName()} is dead.`)

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