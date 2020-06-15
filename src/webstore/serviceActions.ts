class WebStoreServices {
  client: { post: Function }
  constructor(client: { post: Function }) {
    this.client = client
  }

  call(serviceID: string, actionID: string) {
    return this.client.post(`/services/${serviceID}/actions/${actionID}`)
  }
}
export default WebStoreServices
