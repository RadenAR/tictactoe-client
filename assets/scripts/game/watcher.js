'use strict'
const store = require('../store')
const config = require('../config')
const watcher = require('../../../public/resource-watcher-0.1.0.js')

const makeWatcher = () => {
  const gameWatcher = watcher.resourceWatcher(config.apiUrl + '/games/' + store.game.id + '/watch', {
    Authorization: `Token token=${store.user.token}`,
    timeout: 120
  })

  gameWatcher.on('change', function (data) {
    console.log(data)
    if (data.game && data.game.cells) {
      const diff = changes => {
        const before = changes[0]
        const after = changes[1]
        for (let i = 0; i < after.length; i++) {
          if (before[i] !== after[i]) {
            return {
              index: i,
              value: after[i]
            }
          }
        }

        return { index: -1, value: '' }
      }

      const cell = diff(data.game.cells)
      $('#watch-index').val(cell.index)
      $('#watch-value').val(cell.value)
    } else if (data.timeout) { // not an error
      gameWatcher.close()
    }
  })
  gameWatcher.on('error', function (e) {
    console.error('an error has occurred with the stream', e)
  })
}

module.exports = {
  makeWatcher
}
