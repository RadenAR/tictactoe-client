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
      'over': store.game.over
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

const numberOfGames = (status) => {
  return $.ajax({
    url: config.apiUrl + '/games?over=' + status,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const endGameUpdate = () => {
  for (let i = 0; i < 9; i++) {
    const updateObj = {
      'game': {
        'cell': {
          'index': i,
          'value': store.game.cells[i]
        },
        'over': store.game.over
      }
    }
    $.ajax({
      url: config.apiUrl + '/games/' + store.game.id,
      method: 'PATCH',
      headers: {
        Authorization: `Token token=${store.user.token}`
      },
      data: updateObj
    })
  }
}

const joinGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: ''
  })
}

module.exports = {
  newGame,
  updateGame,
  numberOfGames,
  endGameUpdate,
  joinGame
}
