/* eslint-env jest */
import * as handler from './handler';
import payload from './payload';

const data = {
  body: JSON.stringify(payload),
  headers: {
    origin: '',
  },
};

describe('sending a valid request', () => {
  it('should return a 200 status code', async () => {
    const callback = (error, response) => {
      expect(response.statusCode).toEqual(200);
    };

    await handler.filterHandler(data, {}, callback);
  });
});

describe('sending a request without a payload', () => {
  it('should return a 400 status code', async () => {
    const callback = (error, response) => {
      expect(response.statusCode).toEqual(400);
    };

    await handler.filterHandler({}, {}, callback);
  });
});

describe('sending a request with invalid json', () => {
  it('should return a 400 status code', async () => {
    const callback = (error, response) => {
      expect(response.statusCode).toEqual(400);
    };

    await handler.filterHandler('{ $in"valid:_ "\n }', {}, callback);
  });
});

describe('sending a request with invalid payload', () => {
  it('should return a 400 status code', async () => {
    const callback = (error, response) => {
      expect(response.statusCode).toEqual(400);
    };

    data.body = JSON.stringify({ payload: 'lol' });
    await handler.filterHandler(data, {}, callback);
  });
});
