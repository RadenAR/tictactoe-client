const ui = require('./ui')
const api = require('./api')
const store = require('../store')

let player = 0

const addContent = event => {
  if ($(event.target).text() === '' && player === 0 && store.game.over === false) {
    $(event.target).text('x')
    // player = 1
  } else if ($(event.target).text() === '' && player !== 0 && store.game.over === false) {
    $(event.target).text('o')
    player = 0
  }
  api.updateGame(event)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

const createGame = event => {
  event.preventDefault()
  player = 0
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

module.exports = {
  createGame,
  addContent,
  player: player
}
