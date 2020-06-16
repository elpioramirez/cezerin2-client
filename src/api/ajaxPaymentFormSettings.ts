class AjaxPaymentFormSettings {
  client: { get: Function }
  constructor(client: { get: Function }) {
    this.client = client
  }

  retrieve() {
    return this.client.get("/payment_form_settings")
  }
}
export default AjaxPaymentFormSettings
