class OrderTransactions {
  client: { post: Function; put: Function; delete: Function }
  constructor(client: { post: Function; put: Function; delete: Function }) {
    this.client = client
  }

  create(orderId: string, data: string) {
    return this.client.post(`/orders/${orderId}/transactions`, data)
  }

  update(orderId: string, transactionId: string, data: string) {
    return this.client.put(
      `/orders/${orderId}/transactions/${transactionId}`,
      data
    )
  }

  delete(orderId: string, transactionId: string) {
    return this.client.delete(
      `/orders/${orderId}/transactions/${transactionId}`
    )
  }
}
export default OrderTransactions
