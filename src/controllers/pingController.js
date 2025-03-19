const { StatusCodes } = require("http-status-codes");

async function pingCheck(req, res) {
  try {
    res.status(StatusCodes.OK).json({
      message: "Gatekeeper API is Live 🚀",
      version: "v1",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Server error ❌",
      error: error.message,
    });
  }
}

module.exports = { pingCheck };
