'use strict'

const store = require('../store')

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
  $('#message').text(`${response.user.email} successfully signed in! Press 'New Game' to start a game`)
  $('#sign-in').trigger('reset')
  store.user = response.user

  $('#message').removeClass('failure')
  $('#message').addClass('success')
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
}

const onSignOutFailure = () => {
  $('#message').text('Sign Out failed')

  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangeSuccess,
  onChangeFailure,
  onSignOutSuccess,
  onSignOutFailure
}
