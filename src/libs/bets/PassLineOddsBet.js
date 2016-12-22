import Bet from './Bet'

export default class PassLineOddsBet extends Bet {
  constructor(...args) {
    super(...args)
  }

  // Returns a numerical value if the bet should be settled,
  // otherwise a falsy if it should not be settled yet.
  settle(d1, d2, button) {
    if (button) {
      this.setOddsPerButton(button)
      const dTotal = d1 + d2
      if (dTotal === 7) return this.getSettleAmount('lose')
      if (dTotal === button) return this.getSettleAmount('win')
    }
    return null
  }

  setOddsPerButton(button) {
    switch (button) {
      case 4:
        this.setOdds(2 / 1)
        break
      case 5:
        this.setOdds(3 / 2)
        break
      case 6:
        this.setOdds(6 / 5)
        break
      case 8:
        this.setOdds(6 / 5)
        break
      case 9:
        this.setOdds(3 / 2)
        break
      case 10:
        this.setOdds(2 / 1)
        break
    }
    return this.odds
  }
}

module.exports = PassLineOddsBet
