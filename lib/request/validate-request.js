const { MethodNotAllowed } = require('../error');

function validateRequest(request, expectedMethod) {
  if (request.method.toUpperCase() !== expectedMethod.toUpperCase()) {
    throw MethodNotAllowed(`Server not allow method ${expectedMethod.toUpperCase()}`);
  }
}

module.exports = validateRequest;
