const MagentoClient = require('../index')
const { expect } = require('chai')
require('dotenv').config()

console.log(MagentoClient)


describe('magento', () => {

  const client = new MagentoClient(
    process.env.MAGENTO_URL,
    process.env.MAGENTO_TOKEN
  )

  describe('products', () => {

    it('productsList', async () => {
      const res = await client.productsList(
        {
          'searchCriteria[pageSize]': 1,
          'searchCriteria[currentPage]': 1
        }
      )
      expect(res).to.be.an('object')
    })

    it('productsUpdate', async () => {
      const res = await client.productsUpdate('13517', { price: 4 })
      expect(res).to.be.an('object')
    })

  })
})