export default class Bet {
  constructor(amountRisked=0) {
    this.amount = amountRisked
    // this.odds is a ratio of winAmount / betAmount
    this.odds = 1
    this._isOneRoll = false
    this._canBetAfterComeout = true
    this._canRemoveAfterComeout = true
  }

  setBet(amount) {
    if (!this._canRemoveAfterComeout) {
      if (this.button) {
        if (amount < this.amount) {
          throw new Error(`Cannot make bet smaller than original bet after come out.`)
        }
      }
    } else if (!this._canBetAfterComeout) {
      if (this.button) {
        throw new Error(`Cannot make bet after come out.`)
      }
    }
    this.amount = amount
  }

  removeBet() {
    if (!this._canRemoveAfterComeout) {
      if (this.button) {
        throw new Error(`Cannot remove bet after come out.`)
      }
    }
    delete(this.amount)
  }

  setOdds(odds) {
    this.odds = odds
  }

  getSettleAmount(winOrLose = 'lose') {
    switch(winOrLose) {
      case 'win':
        return parseFloat((this.amount * this.odds).toFixed(2))
      case 'lose':
        return -1 * this.amount
    }
    return 0
  }

  setIsOneRoll(boolean) {
    this._isOneRoll = !!boolean
  }

  setCanBetAfterComeout(boolean) {
    this._canBetAfterComeout = !!boolean
  }

  setCanRemoveAfterComeout(boolean) {
    this._canRemoveAfterComeout = !!boolean
  }
}

module.exports = Bet
