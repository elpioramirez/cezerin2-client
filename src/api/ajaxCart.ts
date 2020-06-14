class AjaxCart {
  client: { get: Function; put: Function; post: Function; delete: Function }
  constructor(client: {
    get: Function
    put: Function
    post: Function
    delete: Function
  }) {
    this.client = client
  }

  retrieve(cookie: string) {
    return this.client.get(`/cart`, null, cookie)
  }

  update(data: string) {
    return this.client.put(`/cart`, data)
  }

  checkout() {
    return this.client.put(`/cart/checkout`)
  }

  updateBillingAddress(address: string) {
    return this.client.put(`/cart/billing_address`, address)
  }

  updateShippingAddress(address: string) {
    return this.client.put(`/cart/shipping_address`, address)
  }

  addItem(data: string) {
    return this.client.post(`/cart/items`, data)
  }

  updateItem(id: string, data: string) {
    return this.client.put(`/cart/items/${id}`, data)
  }

  deleteItem(id: string) {
    return this.client.delete(`/cart/items/${id}`)
  }
}
export default AjaxCart
