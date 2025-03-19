const BaseError = require("./BaseError");
const { StatusCodes } = require("http-status-codes");

class Forbidden extends BaseError {
  constructor(message = "Access Forbidden", data = {}) {
    super(StatusCodes.FORBIDDEN, message, data);
  }
}

module.exports = Forbidden;
