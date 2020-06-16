class Orders {
  client: { get: Function; post: Function; put: Function; delete: Function }
  resourceUrl: string
  constructor(client: {
    get: Function
    post: Function
    put: Function
    delete: Function
  }) {
    this.client = client
    this.resourceUrl = "/orders"
  }

  list(filter: string) {
    return this.client.get(this.resourceUrl, filter)
  }

  retrieve(orderId: string, filter: string) {
    return this.client.get(`${this.resourceUrl}/${orderId}`, filter)
  }

  create(data: string) {
    return this.client.post(this.resourceUrl, data)
  }

  update(orderId: string, data: string) {
    return this.client.put(`${this.resourceUrl}/${orderId}`, data)
  }

  delete(orderId: string) {
    return this.client.delete(`${this.resourceUrl}/${orderId}`)
  }

  recalculate(orderId: string) {
    return this.client.put(`${this.resourceUrl}/${orderId}/recalculate`)
  }

  checkout(orderId: string) {
    return this.client.put(`${this.resourceUrl}/${orderId}/checkout`)
  }

  cancel(orderId: string) {
    return this.client.put(`${this.resourceUrl}/${orderId}/cancel`)
  }

  close(orderId: string) {
    return this.client.put(`${this.resourceUrl}/${orderId}/close`)
  }

  updateBillingAddress(orderId: string, address: string) {
    return this.client.put(
      `${this.resourceUrl}/${orderId}/billing_address`,
      address
    )
  }

  updateShippingAddress(orderId: string, address: string) {
    return this.client.put(
      `${this.resourceUrl}/${orderId}/shipping_address`,
      address
    )
  }

  getPaymentFormSettings(orderId: string) {
    return this.client.get(
      `${this.resourceUrl}/${orderId}/payment_form_settings`
    )
  }
}
export default Orders
