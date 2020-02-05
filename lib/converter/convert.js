const defaultHandlers = require('../handler');
const validateRequest = require('../request/validate-request');

function convert({ expectedMethod, successStatusCode }, func, handlers = {}) {
  const requestParamsExtract = handlers.requestParamsExtract
    || defaultHandlers.requestParamsExtract;
  const responseMapping = handlers.responseMapping
    || defaultHandlers.responseMapping;
  const errorHandel = handlers.errorHandel
    || defaultHandlers.errorHandel;

  return async (request) => {
    try {
      validateRequest(request, expectedMethod);

      const params = await requestParamsExtract(request);
      const response = await func(params);
      return await responseMapping(response, successStatusCode);
    } catch (e) {
      // eslint-disable-next-line no-return-await
      return await errorHandel(e);
    }
  };
}

module.exports = convert;
