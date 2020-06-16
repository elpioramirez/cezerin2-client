class Text {
  client: { get: Function }
  constructor(client: { get: Function }) {
    this.client = client
  }

  list() {
    return this.client.get("/text")
  }
}
export default Text
