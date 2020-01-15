const httpAdapter = require('../lib');

function test({
  a, b, c, d,
}) {
  if (a === 0) throw new httpAdapter.Error({ statusCode: 500 });

  return {
    b,
    c,
    d,
  };
}

function returnSuccess() {
  const httpEndpoint = httpAdapter.convert(httpAdapter.GET(200), test);

  return httpEndpoint(new httpAdapter.Request({
    method: httpAdapter.method.GET,
    body: {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    },
  }));
}

function returnError() {
  const httpEndpoint = httpAdapter.convert(httpAdapter.GET(200), test);

  return httpEndpoint(new httpAdapter.Request({
    method: httpAdapter.method.GET,
    body: {
      a: 0,
      b: 2,
      c: 3,
      d: 4,
    },
  }));
}

returnSuccess()
  .then((r) => {
    // eslint-disable-next-line no-console
    console.log(r);
  });
returnError()
  .then((r) => {
    // eslint-disable-next-line no-console
    console.log(r);
  });
