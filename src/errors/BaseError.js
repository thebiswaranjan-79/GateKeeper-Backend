class BaseError extends Error {
    constructor(statusCode, message, data = {}) {
      super(message);
      this.statusCode = statusCode;
      this.data = data; // Additional error details
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = BaseError;
  