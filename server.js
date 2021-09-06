const app = require('./src/app')
const mongose = require("mongoose");
const port = 3000


mongose.connect(process.env.MONGO_URL || "mongodb://0.0.0.0:27017/urlShortener", {
  useNewUrlParser: true,
});


console.log(`app is running on port ${port} `);

app.listen(port);

