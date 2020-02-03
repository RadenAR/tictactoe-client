const ui = require('./ui')
const api = require('./api')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

let player = 0

const addContent = event => {
  if ($(event.target).text() === '' && player % 2 === 0 && store.game.over === false) {
    $(event.target).text('x')
    player = 1
  } else if ($(event.target).text() === '' && player % 2 !== 0 && store.game.over === false) {
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

const playExistingGame = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  store.game.id = data.game.id
  api.joinGame()
    // .then(ui.onJoinGameSuccess)
    // .catch(ui.onJoinGameFailure)
}

module.exports = {
  createGame,
  addContent,
  playExistingGame
}
