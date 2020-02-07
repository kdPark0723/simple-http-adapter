const Error = require('../error/error');
const Response = require('../response/response');

function errorHandel(error) {
  if (error instanceof Error) {
    return new Response({
      statusCode: error.statusCode,
      headers: {},
      body: {
        message: error.message,
      },
    });
  }

  return new Response({
    statusCode: 500,
    headers: {},
    body: {
      message: 'Unknown exception.',
    },
  });
}

module.exports = errorHandel;
