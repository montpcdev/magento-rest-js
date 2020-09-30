const requestPromise = require('minimal-request-promise')
const querystring = require('querystring')
/**
 *
 *
 * @class MagentoClient
 */
class MagentoClient {

  /**
   * Creates an instance of MagentoClient.
   * @param {*} url
   * @param {*} token
   * @memberof MagentoClient
   */
  constructor(url, token) {
    this.url = url
    this.token = token
  }

  productsList (params) {
    const options = {
      headers: { Authorization: `Bearer ${this.token}` },
    }
    return requestPromise.get(`https://${this.url}/rest/default/V1/products?${querystring.stringify(params)}`, options)
      .then(res => JSON.parse(res.body))
  }
}

module.exports = MagentoClient