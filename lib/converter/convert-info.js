const requestMethod = require('../request/request-methods');

function createConvertInfo(expectedMethod) {
  return (successStatusCode) => ({
    expectedMethod,
    successStatusCode,
  });
}

const GET = createConvertInfo(requestMethod.GET);
const HEAD = createConvertInfo(requestMethod.HEAD);
const POST = createConvertInfo(requestMethod.POST);
const PUT = createConvertInfo(requestMethod.PUT);
const DELETE = createConvertInfo(requestMethod.DELETE);
const CONNECT = createConvertInfo(requestMethod.CONNECT);
const OPTIONS = createConvertInfo(requestMethod.OPTIONS);
const TRACE = createConvertInfo(requestMethod.TRACE);
const PATCH = createConvertInfo(requestMethod.PATCH);

module.exports = {
  GET,
  HEAD,
  POST,
  PUT,
  DELETE,
  CONNECT,
  OPTIONS,
  TRACE,
  PATCH,
};
