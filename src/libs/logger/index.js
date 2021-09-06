
const urlLogger = require('./urlLogger')
let logger = null

if(process.env.NODE_ENV !== 'production') {
    logger = urlLogger()
}

module.exports = logger;