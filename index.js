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


  /**
   *
   *
   * @param {*} params
   * @return {*} 
   * @memberof MagentoClient
   */
  productsList (params) {
    const options = {
      headers: { Authorization: `Bearer ${this.token}` },
    }
    return requestPromise.get(`https://${this.url}/rest/default/V1/products?${querystring.stringify(params)}`, options)
      .then(res => JSON.parse(res.body))
  }

  productsUpdate (sku, product) {
    const options = {
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ product })
    }
    return requestPromise.put(`https://${this.url}/rest/default/V1/products/${sku}`, options)
      .then(res => JSON.parse(res.body))
  }

  /**
   *
   *
   * @param {*} sku
   * @return {*} 
   * @memberof MagentoClient
   */
  productsDelete (sku) {
    const options = {
      headers: { Authorization: `Bearer ${this.token}` },
    }
    return requestPromise.delete(`https://${this.url}/rest/default/V1/products/${sku}`)
      .then(res => JSON.parse(res.body))
  }



  /**
   *
   *
   * @param {*} sku
   * @param {*} media
   * @return {*} 
   * @memberof MagentoClient
   */
  productsMedia (sku, entry) {
    const options = {
      headers: { Authorization: `Bearer ${this.token}` },
      body: JSON.stringify({ entry })
    }
    return requestPromise.post(`https://${this.url}/rest/default/V1/products/${sku}/media`)
      .then(res => JSON.parse(res.body))
  }



  /**
   *
   *
   * @param {*} params
   * @return {*} 
   * @memberof MagentoClient
   */
  ordersList (params) {
    const options = {
      headers: { Authorization: `Bearer ${this.token}` },
    }
    return requestPromise.get(`https://${this.url}/rest/default/V1/orders?${querystring.stringify(params)}`, options)
      .then(res => JSON.parse(res.body))
  }
}

module.exports = MagentoClient