const BaseError = require("./BaseError");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends BaseError {
  constructor(message = "Bad Request", data = {}) {
    super(StatusCodes.BAD_REQUEST, message, data);
  }
}

module.exports = BadRequest;
