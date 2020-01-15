# Simple Http Adapter

**Normal function, promise can be used like http function**.

​    

## Install

```shell
$ npm i simple-http-adapter
```

​    

## Usage

```js
const httpAdapter = require('simple-http-adapter');

function test({ a, b, c, d }) {
  if (a === 0) throw new httpAdapter.Error({ statusCode: 500 });

  return { b, c, d };
}

const httpEndpoint = httpAdapter.convert(httpAdapter.GET(200), test);

let response = await httpEndpoint(new httpAdapter.Request({
  method: httpAdapter.method.GET,
  body: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  }
}));

console.log(response);

response = await httpEndpoint(new httpAdapter.Request({
  method: httpAdapter.method.GET,
  body: {
    a: 0,
    b: 2,
    c: 3,
    d: 4,
  }
}));

console.log(response);

```

```shell
Response { statusCode: 200, headers: {}, body: { b: 2, c: 3, d: 4 } }
Response { statusCode: 500, headers: {}, body: { message: '' } }
```

​    

## Spec

### Convert

```js
httpAdapter.convert({ expectedMethod, successStatusCode }, func, handlers = handler);
```

​    

### Handlers

```js
const handlers = { errorHandel, requestParamsExtract, responseMapping };
```

​    

#### Error Handel

```js
function errorHandel(error) {}
```

#### Request Params Extract

```js
function requestParamsExtract(request) {}
```

#### Response Mapping

```js
function responseMapping(response, successStatusCode) {}
```
