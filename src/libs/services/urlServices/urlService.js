
class UrlService {
  constructor(UrlModel) {
    this.UrlModel = UrlModel;
    this.createShortUrl = this.createShortUrl.bind(this);
    this.getUrls = this.getUrls.bind(this);
    this.getFullUrl = this.getFullUrl.bind(this);
  }

  getFullUrl(shortUrl) {
    return this.UrlModel.find({ shortUrl: shortUrl });
  }

  createShortUrl(fullUrl, shortUrl) {
    return new this.UrlModel({ fullUrl, shortUrl }).save();
  }

  getUrls() {
    return this.UrlModel.find({});
  }
}

module.exports = UrlService;
