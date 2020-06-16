class PaymentGateways {
  client: { get: Function; put: Function }
  resourceUrl: string
  constructor(client: { get: Function; put: Function }) {
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
