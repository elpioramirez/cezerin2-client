class AjaxPaymentMethods {
  client: { get: Function }
  constructor(client: { get: Function }) {
    this.client = client
  }

  list() {
    return this.client.get("/payment_methods")
  }
}
export default AjaxPaymentMethods
