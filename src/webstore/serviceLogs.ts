class WebStoreServices {
  client: { get: Function }
  constructor(client: { get: Function }) {
    this.client = client
  }

  list(serviceID: string) {
    return this.client.get(`/services/${serviceID}/logs`)
  }
}
export default WebStoreServices
