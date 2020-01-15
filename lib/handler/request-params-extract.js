function requestParamsExtract(request) {
  const params = {};

  if (request.params) Object.assign(params, request.params);
  if (request.query) Object.assign(params, request.query);
  if (request.header) Object.assign(params, request.header);
  if (request.body) Object.assign(params, request.body);

  return params;
}

module.exports = requestParamsExtract;
