import axios from 'axios';
import { get } from 'lodash';

import { emitGlobalEvent } from '../helpers';

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    emitGlobalEvent('Alert.error', {error: error.message});
    return error;
  },
);

const root = 'https://react-articles-92f72-default-rtdb.europe-west1.firebasedatabase.app';

class Api {
  constructor(apiUrl = root) {
    this.apiUrl = apiUrl;
  }
  
  /** Request to API
   *
   * @param {string} url - piece of url
   * @param {object} options - request options
   * @param {object} data - request data
   * @returns {Promise<any>}
   */
  async request(url = '', options = {}, data){
    const defaultOptions = {...options};
    return await axios({
      url: this.apiUrl + url,
      ...defaultOptions,
      data,
    })
      .then(response => get(response, ['data'], null));
  }
}

export default Api;
export const api = new Api();