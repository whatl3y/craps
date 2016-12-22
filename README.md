# Play the fun game of craps!

Craps has been played for a long time, and is one of the most exciting
games played in a casino. There are hundreds of bets you can make, all with
different odds that can cause your head to spin.

## Build

```
>gulp prep-prod
```

## Start a new game

```js
const Craps = require('./libs/Craps.js')
myCrapsGame = new Craps()
```

## Add a players

```js
myCrapsGame.addPlayer(startingBalance)
console.log(myCrapsGame.players)
```

## Add bets for players

```js
myCrapsGame.players[index].addBet(betType, amount)
```

## Roll the dice

```js
myCrapsGame.roll()
```
