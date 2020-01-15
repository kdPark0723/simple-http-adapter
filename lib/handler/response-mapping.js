const Response = require('../response/response');

function responseMapping(response, successStatusCode) {
  return new Response({
    statusCode: successStatusCode,
    headers: {},
    body: response,
  });
}

module.exports = responseMapping;
