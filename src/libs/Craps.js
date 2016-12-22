import Dice from './Dice'
import Player from './Player'

export default class Craps {
  constructor() {
    this._dice1 = new Dice(`d1`)
    this._dice2 = new Dice(`d2`)

    // Controls where the on/off button is and its current state.
    // If this.button is falsy, button is off, otherwise it will
    // be a number that represents where the button is currently on.
    this.button = null

    this.players = []
  }

  addPlayer(startingBalance=100) {
    const player = new Player(startingBalance)
    this.players.push(player)
    return player
  }

  roll() {
    return this.rollRandom()
  }

  rollRandom() {
    let d1
    let d2
    [d1, d2] = this.rollDice()
    this.settleBets(d1, d2)
    this.updateButtonState(d1, d2)
    return [d1, d2, d1+d2]
  }

  rollManual(d1, d2) {
    [d1, d2] = this.rollDice(d1, d2)
    this.settleBets(d1, d2)
    this.updateButtonState(d1, d2)
    return [d1, d2, d1+d2]
  }

  rollDice(d1=this._dice1.roll(), d2=this._dice1.roll()) {
    return [
      this._dice1.roll(d1),
      this._dice2.roll(d2)
    ]
  }

  settleBets(d1, d2) {
    this.players.forEach((player) => {
      player.settleBets(d1, d2, this.button)
    })
  }

  updateButtonState(d1, d2) {
    const dTotal = d1 + d2
    // handle if we're in the comeout
    if (!this.button) {
      if ([4, 5, 6, 8, 9, 10].indexOf(dTotal) > -1) {
        this.button = d1 + d2
      }
    } else if (dTotal === 7 || dTotal === this.button) {
      this.button = null
    }
    return this.button
  }
}

module.exports = Craps
