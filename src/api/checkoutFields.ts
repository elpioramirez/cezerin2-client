class CheckoutFields {
  client: { get: Function; put: Function }
  resourceUrl: string
  constructor(client: { get: Function; put: Function }) {
    this.client = client
    this.resourceUrl = "/settings/checkout/fields"
  }

  list() {
    return this.client.get(this.resourceUrl)
  }

  retrieve(name: string) {
    return this.client.get(`${this.resourceUrl}/${name}`)
  }

  update(name: string, data: string) {
    return this.client.put(`${this.resourceUrl}/${name}`, data)
  }
}
export default CheckoutFields
