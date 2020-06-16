class Customers {
  client: { get: Function; post: Function; put: Function; delete: Function }
  resourceUrl: string
  constructor(client: {
    get: Function
    post: Function
    put: Function
    delete: Function
  }) {
    this.client = client
    this.resourceUrl = "/customers"
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

  createAddress(customerId: string, data: string) {
    return this.client.post(`${this.resourceUrl}/${customerId}`, data)
  }

  updateAddress(customerId: string, addressId: string, data: string) {
    return this.client.put(
      `${this.resourceUrl}/${customerId}/addresses/${addressId}`,
      data
    )
  }

  deleteAddress(customerId: string, addressId: string) {
    return this.client.delete(
      `${this.resourceUrl}/${customerId}/addresses/${addressId}`
    )
  }

  setDefaultBillingAddress(customerId: string, addressId: string) {
    return this.client.post(
      `${this.resourceUrl}/${customerId}/addresses/${addressId}/default_billing`
    )
  }

  setDefaultShippingAddress(customerId: string, addressId: string) {
    return this.client.post(
      `${this.resourceUrl}/${customerId}/addresses/${addressId}/default_shipping`
    )
  }
}
export default Customers
