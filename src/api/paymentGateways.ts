class PaymentGateways {
  constructor(client) {
    this.client = client
    this.resourceUrl = "/payment_gateways"
  }

  retrieve(gatewayName: string) {
    return this.client.get(`${this.resourceUrl}/${gatewayName}`)
  }

  update(gatewayName: string, data: string) {
    return this.client.put(`${this.resourceUrl}/${gatewayName}`, data)
  }
}
export default PaymentGateways
