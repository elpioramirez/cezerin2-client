class Products {
  client: any
  resourceUrl: string
  constructor(client) {
    this.client = client
    this.resourceUrl = "/products"
  }

  list(filter: string) {
    return this.client.get(this.resourceUrl, filter)
  }

  retrieve(id: string, filter: string) {
    return this.client.get(`${this.resourceUrl}/${id}`, filter)
  }

  create(data: string) {
    return this.client.post(this.resourceUrl, data)
  }

  update(id: string, data: string) {
    return this.client.put(`${this.resourceUrl}/${id}`, data)
  }

  delete(id: string) {
    return this.client.delete(`${this.resourceUrl}/${id}`)
  }

  skuExists(productID: string, sku: string) {
    return this.client.get(`${this.resourceUrl}/${productID}/sku`, { sku })
  }

  slugExists(productId, slug) {
    return this.client.get(`${this.resourceUrl}/${productId}/slug`, { slug })
  }
}
export default Products
