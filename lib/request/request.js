class Request {
  constructor({ method, header, query, body }) {
    this.method = method;
    this.header = header;
    this.query = query;
    this.body = body;
  }
}

module.exports = Request;
