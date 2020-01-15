const defaultHandlers = require('../handler');
const validateRequest = require('../request/validate-request');

function convert({ expectedMethod, successStatusCode }, func, handlers = {}) {
  const localHandlers = Object.assign(handlers, defaultHandlers);

  return async (request) => {
    try {
      validateRequest(request, expectedMethod);

      const params = await localHandlers.requestParamsExtract(request);
      const response = await func(params);
      return await localHandlers.responseMapping(response, successStatusCode);
    } catch (e) {
      // eslint-disable-next-line no-return-await
      return await localHandlers.errorHandel(e);
    }
  };
}

module.exports = convert;
