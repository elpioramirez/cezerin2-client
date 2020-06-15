class WebStoreAccount {
  client: { get: Function; put: Function }
  resourceUrl: string
  constructor(client: { get: Function; put: Function }) {
    this.client = client
    this.resourceUrl = "/account"
  }

  retrieve() {
    return this.client.get(this.resourceUrl)
  }

  update(data: string) {
    return this.client.put(this.resourceUrl, data)
  }

  updateDeveloper(data: string) {
    return this.client.put(`${this.resourceUrl}/developer`, data)
  }
}
export default WebStoreAccount
