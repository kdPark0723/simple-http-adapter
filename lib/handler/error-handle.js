const Error = require('../error/error');
const Response = require('../response/response');

function errorHandel(error) {
  if (error instanceof Error) {
    return new Response({
      statusCode: error.statusCode,
      body: {
        message: error.message,
      },
    });
  }

  throw error;
}

module.exports = errorHandel;
