'use strict'

const store = require('../store')
const api = require('./api')
const events = require('./events')

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
    $('#message2').text(`Game Over, ${board[0].toUpperCase()} wins!`)
    api.endGameUpdate()
  } else if (((board[1] === board[4] && board[1] === board[7]) ||
      (board[2] === board[4] && board[2] === board[6]) ||
      (board[3] === board[4] && board[3] === board[5])) && board[4] !== '') {
    store.game.over = true
    $('#message2').text(`Game Over, ${board[4].toUpperCase()} wins!`)
    api.endGameUpdate()
  } else if (((board[2] === board[5] && board[2] === board[8]) ||
      (board[6] === board[7] && board[6] === board[8])) && board[8] !== '') {
    store.game.over = true
    $('#message2').text(`Game Over, ${board[8].toUpperCase()} wins!`)
    api.endGameUpdate()
  } else if (board[0] !== '' && board[1] !== '' && board[2] !== '' &&
              board[3] !== '' && board[4] !== '' && board[5] !== '' &&
              board[6] !== '' && board[7] !== '' && board[8] !== '') {
    store.game.over = true
    $('#message2').text('Game Over, Tie')
    api.endGameUpdate()
  }
}

const onNewGameSuccess = response => {
  store.game = response.game
  updateBoard()
  checkForWin()
  $('#message').text('')
  $('#message2').text('X\'s Turn')

  api.numberOfGames(true)
    .then(onNumberGameSuccess)
}

const onNewGameFailure = response => {
  $('#message').text('Failed to Create New Game')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const ai = () => {
  const space = Math.floor(Math.random() * 8)
  if (store.game.cells[space] !== 'x' && store.game.cells[space] !== 'o') {
    store.game.cells[space] = 'o'
    updateBoard()
  } else {
    ai()
  }
  api.updateGameAi(space)
    .then(() => {
      let numberOfX = 0
      let numberOfO = 0
      for (let i = 0; i < store.game.cells.length; i++) {
        if (store.game.cells[i] === 'x') {
          numberOfX++
        } else if (store.game.cells[i] === 'o') {
          numberOfO++
        }
      }
      if (numberOfX - numberOfO !== 0 && store.game.over === false) {
        $('#message2').text(`O's Turn`)
      } else if (store.game.over === false) {
        $('#message2').text(`X's Turn`)
      } else {
        checkForWin()
      }
      events.player = 0
      checkForWin()
    })
}

const onUpdateGameSuccess = response => {
  store.game = response.game
  updateBoard()
  checkForWin()
  let numberOfX = 0
  let numberOfO = 0
  for (let i = 0; i < store.game.cells.length; i++) {
    if (store.game.cells[i] === 'x') {
      numberOfX++
    } else if (store.game.cells[i] === 'o') {
      numberOfO++
    }
  }
  if (numberOfX - numberOfO !== 0 && store.game.over === false) {
    $('#message2').text(`O's Turn`)
  } else if (store.game.over === false) {
    $('#message2').text(`X's Turn`)
  } else {
    checkForWin()
  }
  if (store.game.over === false) {
    ai()
  }
}

const onUpdateGameFailure = response => {
  $('#message').text('Failed to Update Game')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onNumberGameSuccess = response => {
  $('#game').text(response.games.length)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
