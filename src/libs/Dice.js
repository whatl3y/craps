export default class Dice {
  constructor(name=`dice${Math.random()}`) {
    this.name = name
  }

  roll(number) {
    if (number && this.isValidRoll(number)) {
      return number
    }
    return this.rollRandom()
  }

  rollRandom() {
    return Math.floor(Math.random() * 6) + 1
  }

  isValidRoll(number) {
    return number >= 1 && number <= 6
  }
}

module.exports = Dice
