const BaseError = require("./BaseError");
const { StatusCodes } = require("http-status-codes");

class NotFound extends BaseError {
  constructor(resource = "Resource", data = {}) {
    super(StatusCodes.NOT_FOUND, `${resource} Not Found`, data);
  }
}

module.exports = NotFound;
