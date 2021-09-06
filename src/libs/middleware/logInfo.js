const logger = require('../logger/index')

const loggerInfo = (req, res ,next) => {
  const url = req.url
  const body = req.body
  let bodyString = ''

  for (const key in body) {
    bodyString = `${key}: ${body[key]}`;
  }

    logger.info(
      `Incoming Request at ${url} || bodys =  [${bodyString}]`
    );
  return next()
}

module.exports = loggerInfo;