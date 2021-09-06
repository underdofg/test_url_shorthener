const mongose = require("mongoose");
const shortId = require("shortid");
const Schema = mongose.Schema;

const UrlSchema = new Schema({
  fullUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, default: shortId.generate},
});

module.exports = mongose.model("Url", UrlSchema);
