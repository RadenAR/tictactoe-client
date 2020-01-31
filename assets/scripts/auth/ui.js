'use strict'

const store = require('../store')
const gameApi = require('../game/api')

const onSignUpSuccess = response => {
  $('#message').text(`${response.user.email} successfully signed up`)
  $('#sign-up').trigger('reset')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const onSignUpFailure = response => {
  $('#message').text('Sign up failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignInSuccess = response => {
  $('#message').text(`${response.user.email} successfully signed in!`)
  $('#message2').text(`Press 'New Game' to start a game`)
  $('#sign-in').trigger('reset')
  store.user = response.user

  $('#message').removeClass('failure')
  $('#message').addClass('success')

  gameApi.numberOfGames()
    .then(onNumberOfGamesSuccess)
  $('#game-table').show()
}

const onSignInFailure = response => {
  $('#message').text('Sign in failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onChangeSuccess = () => {
  $('#message').text(`Successfully changed password`)
  $('#change-pw').trigger('reset')

  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const onChangeFailure = () => {
  $('#message').text('Change password failed')
  $('#change-pw').trigger('reset')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignOutSuccess = () => {
  $('#message').text(`Successfully Signed Out`)

  store.user = null

  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#message2').text('')

  $('#game-table').hide()
}

const onSignOutFailure = () => {
  $('#message').text('Sign Out failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onNumberOfGamesSuccess = response => {
  $('#games').text(response.games.length)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangeSuccess,
  onChangeFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNumberOfGamesSuccess
}
