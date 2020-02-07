const defaultHandlers = require('../handler');
const validateRequest = require('../request/validate-request');
const runIfPromise = require('../util/run-if-promise');

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

      const params = await runIfPromise(requestParamsExtract(request));
      const response = await runIfPromise(func(params));
      return await runIfPromise(responseMapping(response, successStatusCode));
    } catch (e) {
      // eslint-disable-next-line no-return-await
      return await errorHandel(e);
    }
  };
}

module.exports = convert;
