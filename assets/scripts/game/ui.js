'use strict'

const store = require('../store')

const updateBoard = () => {
  const board = store.game.cells
  board.forEach((ele, i) => {
    $(`#space${i}`).text(ele)
  })
}

const onNewGameSuccess = response => {
  store.game = response.game
  updateBoard()
}

const onNewGameFailure = response => {
  $('#message').text('Failed to Create New Game')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onUpdateGameSuccess = response => {
  store.game = response.game
  updateBoard()
}

const onUpdateGameFailure = response => {
  $('#message').text('Failed to Update Game')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
