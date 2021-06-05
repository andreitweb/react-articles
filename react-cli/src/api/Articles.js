import Api from './index';

const url = '/articles.json';
const filterUrl = url + '?orderBy="$key"&equalTo=';

class ArticlesApi extends Api{
  
  /** Fetch articles
   *
   * @returns {Promise<any>}
   */
  async fetchArticles() {
    return await this.request(url, { method: 'get' });
  }
  
  /** Fetch article's detail page
   *
   * @param {string} articleKey - article's key
   * @returns {Promise<any>}
   */
  async fetchDetail(articleKey = '') {
    const requestUrl = filterUrl + `"${articleKey}"`;
    return await this.request(requestUrl, { method: 'get' }).then((result) => result[articleKey] || null);
  }
  
  /** Fetch to create new article
   *
   * @param {object} data -
   * @returns {Promise<any>}
   */
  async createArticle(data= {}) {
    return await this.request(url, { method: 'post' }, data);
  }
}

export default ArticlesApi;
export const articlesApi = new ArticlesApi();