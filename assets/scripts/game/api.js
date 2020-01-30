const config = require('../config')
const store = require('../store')

const newGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: '{}'
  })
}

const updateGame = event => {
  const updateObj = {
    'game': {
      'cell': {
        'index': $(event.target).data('num'),
        'value': $(event.target).text()
      },
      'over': false
    }
  }
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: updateObj
  })
}

module.exports = {
  newGame,
  updateGame
}
