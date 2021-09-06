const UrlModel = require('./urlServices/urlModel')
const UrlService = require('./urlServices/urlService')

const urlService = new UrlService(UrlModel);

module.exports = {
  urlService,
};