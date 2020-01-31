'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const gameEvents = require('./game/events')
const authEvents = require('./auth/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Auth stuff
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePw)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // game stuff
  $('#new-game').on('click', gameEvents.createGame)
  $('.spaces').on('click', gameEvents.addContent)

  $('#game-table').hide()
})
