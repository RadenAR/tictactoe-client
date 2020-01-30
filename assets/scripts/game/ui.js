'use strict'

const store = require('../store')

const updateBoard = () => {
  const board = store.game.cells
  if (store.game.over === false) {
    board.forEach((ele, i) => {
      $(`#space${i}`).text(ele)
    })
  }
}

const checkForWin = () => {
  const board = store.game.cells
  if (((board[0] === board[1] && board[0] === board[2]) ||
      (board[0] === board[4] && board[4] === board[8]) ||
      (board[0] === board[3] && board[0] === board[6])) && board[0] !== '') {
    store.game.over = true
    console.log(store)
    $('#message').text('Game Over')
  } else if (((board[1] === board[4] && board[1] === board[7]) ||
      (board[2] === board[4] && board[2] === board[6]) ||
      (board[3] === board[4] && board[3] === board[5])) && board[4] !== '') {
    store.game.over = true
    $('#message').text('Game Over')
  } else if (((board[2] === board[5] && board[2] === board[8]) ||
      (board[6] === board[7] && board[6] === board[8])) && board[8] !== '') {
    store.game.over = true
    $('#message').text('Game Over')
  }
}

const onNewGameSuccess = response => {
  store.game = response.game
  updateBoard()
  checkForWin()
}

const onNewGameFailure = response => {
  $('#message').text('Failed to Create New Game')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onUpdateGameSuccess = response => {
  store.game = response.game
  checkForWin()
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
