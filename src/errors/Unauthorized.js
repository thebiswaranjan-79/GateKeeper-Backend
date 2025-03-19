const BaseError = require("./BaseError");
const { StatusCodes } = require("http-status-codes");

class Unauthorized extends BaseError {
  constructor(message = "Unauthorized Access", data = {}) {
    super(StatusCodes.UNAUTHORIZED, message, data);
  }
}

module.exports = Unauthorized;
