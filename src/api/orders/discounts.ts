class OrderDiscounts {
  client: { post: Function; put: Function; delete: Function }
  constructor(client: { post: Function; put: Function; delete: Function }) {
    this.client = client
  }

  create(orderId: string, data: string) {
    return this.client.post(`/orders/${orderId}/discounts`, data)
  }

  update(orderId: string, discountId: string, data: string) {
    return this.client.put(`/orders/${orderId}/discounts/${discountId}`, data)
  }

  delete(orderId: string, discountId: string) {
    return this.client.delete(`/orders/${orderId}/discounts/${discountId}`)
  }
}
export default OrderDiscounts
