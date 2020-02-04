'use strict'
const gameEvents = require('./game/events')
const authEvents = require('./auth/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-pw').on('submit', authEvents.onChangePw)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('#new-game').on('click', gameEvents.createGame)
  $('.spaces').on('click', gameEvents.addContent)

  $('#game-table').hide()
  $('#change-pw').hide()
  $('#sign-out').hide()

  $('#message2').text('Sign In to Play')
  $('#myModal').modal('show')
})
