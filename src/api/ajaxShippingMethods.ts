class AjaxShippingMethods {
  client: { get: Function }
  constructor(client: { get: Function }) {
    this.client = client
  }

  list() {
    return this.client.get("/shipping_methods")
  }
}
export default AjaxShippingMethods
