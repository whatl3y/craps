import Bet from './Bet'

export default class DontPassLineFlatBet extends Bet {
  constructor(...args) {
    super(...args)
    this.setOdds(1/1)
    this.setCanBetAfterComeout(false)
  }

  // Returns a numerical value if the bet should be settled,
  // otherwise falsy if it should not be settled yet.
  settle(d1, d2, button) {
    const dTotal = d1 + d2
    if (!button) {
      if (dTotal === 7 || dTotal === 11) {
        return this.getSettleAmount('lose')
      } else if (dTotal === 2 || dTotal === 3) {
        return this.getSettleAmount('win')
      }
    } else {
      if (dTotal === 7) {
        return this.getSettleAmount('win')
      } else if (dTotal === button) {
        return this.getSettleAmount('lose')
      }
    }
    return null
  }
}

module.exports = DontPassLineFlatBet
