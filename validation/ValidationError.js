const Joi = require('@hapi/joi');


function ValidationError(developer){
  const schema = Joi.object({
    name: Joi.string().alphanum().required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow:['com', 'net']}}).required(),
    phone: Joi.number().integer().required(),
    avatar: Joi.string().required()
  })
  return schema.validate(developer);
}
module.exports = ValidationError;

