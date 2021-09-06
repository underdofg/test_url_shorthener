const Joi = require("joi");

const schema = Joi.object({
  fullUrl: Joi.string().min(1).required(),
});

module.exports = (req, res, next) => {
  const result = schema.validate(req.body);
  if (result.error) {
    return next(new Error(result.error));
  }
  return next();
};
