const { MethodNotAllowed } = require('../error');

function validateRequest(request, expectedMethod) {
  if (!expectedMethod) return;

  if (request.method.toUpperCase() !== expectedMethod.toUpperCase()) {
    throw MethodNotAllowed(`Server not allow method ${expectedMethod.toUpperCase()}`);
  }
}

module.exports = validateRequest;
