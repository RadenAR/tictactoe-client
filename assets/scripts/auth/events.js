const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const gameApi = require('../game/api')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)

  // gameApi.numberOfGames(true)
  //   .then(ui.onFinishedGamesSuccess)
  //
  // gameApi.numberOfGames(false)
  //   .then(ui.onUnfinishedGamesSuccess)
}

const onChangePw = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  api.changePw(data)
    .then(ui.onChangeSuccess)
    .catch(ui.onChangeFailure)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut
}
