import Human from './Human'
import Elf from './Elf'
import Battle from './Battle'

const warrior = new Human('Warrior', 100, 25)
const archer = new Elf('Archer', 100, 25, 'fire')

const battle = new Battle(warrior, archer)
battle.startBattle()