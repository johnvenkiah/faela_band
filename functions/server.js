const app = require('../server');

exports.handler = async (event, context) => {
  const { httpMethod, path } = event;

  if (httpMethod !== 'GET' || !path.startsWith('/api/calendar/events')) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        error: 'Not found',
      }),
    };
  }

  try {
    const req = {
      method: httpMethod,
      url: path,
      headers: event.headers,
    };
    const res = {
      json: (data) => ({
        statusCode: 200,
        body: data,
        // body: JSON.stringify(data),
      }),
      status: (statusCode) => ({
        json: (data) => ({
          statusCode,
          body: data,
          // body: JSON.stringify(data),
        }),
      }),
    };
    const response = await app(req, res);
    return response;
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Server error',
      }),
    };
  }
};
