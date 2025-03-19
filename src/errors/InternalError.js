const BaseError = require("./BaseError");
const { StatusCodes } = require("http-status-codes");

class InternalError extends BaseError {
  constructor(message = "Internal Server Error", data = {}) {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message, data);
  }
}

module.exports = InternalError;
