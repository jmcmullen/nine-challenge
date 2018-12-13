/* eslint-env jest */
import * as handler from './handler';

describe('sending a valid request', () => {
  it('should return a 200 status code', async () => {
    const callback = (error, response) => {
      expect(response.statusCode).toEqual(200);
    };

    await handler.helloHandler({}, {}, callback);
  });
});
