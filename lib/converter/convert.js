const handler = require('../handler');
const validateRequest = require('../request/validate-request');

function convert({ expectedMethod, successStatusCode }, func, handlers = handler) {
  return async (request) => {
    try {
      validateRequest(request, expectedMethod);

      const params = await handlers.requestParamsExtract(request);
      const response = await func(params);
      return await handlers.responseMapping(response, successStatusCode);
    } catch (e) {
      // eslint-disable-next-line no-return-await
      return await handlers.errorHandel(e);
    }
  };
}

module.exports = convert;
