import axios from 'axios';
// const getBaseHeaders = (headers) => {
  //   return {
  //     ...headers
  //   };
  // };

class Request {
  constructor(apiUrl) {
    this.instance = axios.create({
      headers: {
        // ...getBaseHeaders(),
      },
      baseURL: apiUrl,
    });
  }

  get = async (dest, params = {}, config = {}) => {
    const { data } = await this.instance.get(dest, {
      ...config,
      // headers: getBaseHeaders(config.headers),
      params,
    });
    return data;
  };

  post = async (dest, body = {}, config = {}) => {
    const { data } = await this.instance.post(dest, body, {
      ...config,
      // headers: getBaseHeaders(config.headers),
    });
    return data;
  };
}

const apiUrl = process.env.API_URL;

const request = new Request(apiUrl);

export default request;
