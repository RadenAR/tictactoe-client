const ui = require('./ui')
const api = require('./api')

let player = 0

const addContent = event => {
  if ($(event.target).text() === '' && player % 2 === 0) {
    $(event.target).text('x')
    player = 1
  } else if ($(event.target).text() === '' && player % 2 !== 0) {
    $(event.target).text('o')
    player = 0
  }
  api.updateGame(event)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

const createGame = event => {
  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

module.exports = {
  createGame,
  addContent
}
