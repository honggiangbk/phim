'use strict'

require('dotenv').config({ silient: true })
require('now-logs')('phim.clgt.vn')
require('./lib/array-concatAll')

const server = require('./lib/server')

server.listen(process.env.PORT || 8080, () => {
  console.log(`app run on http://0.0.0.0:8080`)
})
