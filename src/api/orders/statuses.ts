class OrderStatuses {
  constructor(client) {
    this.client = client
    this.resourceUrl = "/order_statuses"
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
}
export default OrderStatuses
