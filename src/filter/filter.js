class Filter {
  constructor(options) {
    this.callback = options.callback || (() => {});
    this.data = options.data || (() => {});
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
    const response = [];
    this.data.payload.forEach(show => {
      if (show.drm && show.episodeCount > 0) {
        const { title, slug, image } = show;
        response.push({
          title,
          slug,
          image,
        });
      }
    });

    return this.callback(null, this.response(200, { response }));
  }
}

export { Filter as default };
