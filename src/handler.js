import Filter from './filter';

export const filterHandler = async (event, context, callback) => {
  try {
    const data = JSON.parse(event.body);
    const filter = new Filter({
      data,
      callback,
    });

    if (!data || !data.payload) {
      throw new Error('Missing payload');
    }

    if (!Array.isArray(data.payload)) {
      throw new Error('Payload must be an array');
    }

    return filter.run();
  } catch (error) {
    const response = {
      statusCode: 400,
      body: JSON.stringify({
        error: `Could not decode request: ${error.message}`,
      }),
    };
    return callback(null, response);
  }
};
