const winston = require("winston");
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf , label } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const urlLogger = () => {
    return (logger = winston.createLogger({
      level: "info",
      format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), myFormat),
      defaultMeta: { service: "user-service" },
      transports: [
        new transports.Console(),
        new transports.File({ filename: "logs.json" })
      ]
    }));

};

module.exports = urlLogger;
