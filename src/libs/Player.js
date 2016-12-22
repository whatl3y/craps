// import Bet from './Bet'
import DontPassLineFlatBet from './bets/DontPassLineFlatBet'
import DontPassLineOddsBet from './bets/DontPassLineOddsBet'
import PassLineFlatBet from './bets/PassLineFlatBet'
import PassLineOddsBet from './bets/PassLineOddsBet'

export default class Player {
  constructor(startingBalance=100, name=null) {
    this.balance = startingBalance
    this.name = (name || Math.floor(Math.random() * 1e7)).toString()
    this.bets = []
  }

  addBet(type, amount) {
    const betClass = this.getBetType(type)
    if (betClass) {
      const newBet = new betClass(amount)
      this.bets.push(newBet)
      return newBet
    }
    throw new Error(`Invalid bet type.`)
  }

  getBetType(type) {
    switch (type) {
      case 'pass_flat':
        return PassLineFlatBet
      case 'pass_odds':
        return PassLineOddsBet
      case 'dpass_flat':
        return DontPassLineFlatBet
      case 'dpass_odds':
        return DontPassLineOddsBet
    }
  }

  settleBets(d1, d2, button) {
    let betIndicesToRemove = []
    this.bets.forEach((bet, _index) => {
      const amountChange = bet.settle(d1, d2, button)
      if (typeof amountChange === 'number') {
        this.balance += amountChange
        betIndicesToRemove.push(_index)
        console.log(`Bet settled for player, ${this.name}, ${bet.constructor.name}: ${amountChange} -- new balance: ${this.balance}`)
      }
    })
    this.removeBets(betIndicesToRemove)
  }

  removeBets(indices) {
    indices.forEach((index) => {
      if (this.bets.length === 1) {
        this.bets = []
      } else {
        this.bets.splice(index, 1)
      }
    })
  }
}

module.exports = Player
