class Currencies {
  client: { get: Function }
  constructor(client: { get: Function }) {
    this.client = client
  }

  list() {
    return this.client.get("/currencies")
  }
}
export default Currencies
