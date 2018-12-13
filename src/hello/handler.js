import Hello from './hello';

export const helloHandler = async (event, context, callback) => {
  try {
    const hello = new Hello({
      callback,
    });

    return hello.run();
  } catch (error) {
    const response = {
      statusCode: 400,
      body: JSON.stringify({
        error,
      }),
    };
    return callback(null, response);
  }
};
