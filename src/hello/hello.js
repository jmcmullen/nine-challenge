class Hello {
  constructor(options) {
    this.callback = options.callback || (() => {});
  }

  response(statusCode, data) {
    return {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(data),
    };
  }

  async run() {
    return this.callback(
      null,
      this.response(200, {
        message: 'Hello, welcome to my technical test for nine.com.au',
        repo: 'https://github.com/jmcmullen/nine-challenge',
      })
    );
  }
}

export { Hello as default };
