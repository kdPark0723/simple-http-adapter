function requestParamsExtract(request) {
  const params = {};

  Object.entries((request))
    .forEach(([key, value]) => {
      if (key === 'params'
        || key === 'query'
        || key === 'header'
        || key === 'body'
      ) {
        Object.assign(params, value);
      } else {
        params[key] = value;
      }
    });

  return params;
}

module.exports = requestParamsExtract;
