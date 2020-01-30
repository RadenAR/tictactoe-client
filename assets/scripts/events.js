const engine = require('./engine')

let player = 0

const addContent = (event) => {
  if ($(event.target).text() === '' && player % 2 === 0) {
    $(event.target).text('x')
    player = 1
  } else if ($(event.target).text() === '' && player % 2 !== 0) {
    $(event.target).text('o')
    player = 0
  }
}

module.exports = {
  addContent
}
