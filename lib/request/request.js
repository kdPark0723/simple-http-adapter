class Request {
  constructor({
    method, params, query, header, body,
  }) {
    this.method = method;
    this.params = params;
    this.query = query;
    this.header = header;
    this.body = body;
  }
}

module.exports = Request;
