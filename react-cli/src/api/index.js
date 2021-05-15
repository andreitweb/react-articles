import axios from 'axios';
import { merge, get } from 'lodash';

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return error;
  },
);

const root = process.env.FIREBASE_URL;

class Api {
  constructor(apiUrl = root) {
    this.apiUrl = apiUrl;
  }
  
  /** Request to API
   *
   * @param {string} url - piece of url
   * @param {object} options - request data
   * @returns {Promise<any>}
   */
  async request(url = '', options = {}){
    const defaultOptions = {};
    return await axios(this.apiUrl + url, merge(defaultOptions, options))
      .then(response => get(response, ['data'], null))
      .catch((e) => this.errorLogger(e.message));
  }
  
  /** Dispatch event with error
   *
   * @param {string} error - error message
   */
  errorLogger(error){
    document.dispatchEvent(
      new CustomEvent('alert.error', {
        detail: { error },
      }),
    );
  }
}

export default Api;
export const api = new Api();