class OrderItems {
  client: { post: Function; put: Function; delete: Function }
  constructor(client: { post: Function; put: Function; delete: Function }) {
    this.client = client
  }

  create(orderId: string, data: string) {
    return this.client.post(`/orders/${orderId}/items`, data)
  }

  update(orderId: string, itemId: string, data: string) {
    return this.client.put(`/orders/${orderId}/items/${itemId}`, data)
  }

  delete(orderId: string, itemId: string) {
    return this.client.delete(`/orders/${orderId}/items/${itemId}`)
  }
}
export default OrderItems
