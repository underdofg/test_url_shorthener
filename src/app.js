const express = require("express") 
const bodyParser = require("body-parser");
const validateUrlService = require("./libs/services/urlServices/validateUrlService");
const {urlService} = require('./libs/services/index')
const logger = require("./libs/logger/index"); 
const loggerInfo = require('./libs/middleware/logInfo')
const path= require("path");
const app = express()


app.use(express.static(path.join(__dirname, ".." , "dist")));
app.use(bodyParser.json());
app.use(loggerIno);

app.post("/shorten", validateUrlService, async (req, res, next) => {
  try {
     const { fullUrl } = req.body
     const result = await urlService.createShortUrl(fullUrl);
     res.json(result);
  } catch(error) {
     next(error);
  }
});

app.get("/get/urls", async (req, res , next) => {  
  try {
    const urls = await urlService.getUrls();
    res.send(urls);
  } catch(error) {
    next(error);
  }
});

app.get("/:url", async (req, res, next) => {
  try {
    const { url } = req.params;
    const result = await urlService.getFullUrl(url);
    const fullUrl = result[0].fullUrl;
    if (fullUrl) {
      res.redirect(fullUrl);
    } else {
      res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
    };
  } catch(error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  logger.info(`Get some error = ${error.message}`);
  res.status(500).json({ error: error.message });
});

module.exports = app;


// app.all('*' , (req , res) => {
//     res.sendFile(path.join(__dirname , ".." , "dist" , "index.html"))
// })
