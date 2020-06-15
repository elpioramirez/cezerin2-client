class WebStoreServices {
  client: { get: Function; post: Function }
  constructor(client: { get: Function; post: Function }) {
    this.client = client
  }

  retrieve(id: string) {
    return this.client.get(`/services/${id}/settings`)
  }

  update(id: string, data: string) {
    return this.client.post(`/services/${id}/settings`, data)
  }
}
export default WebStoreServices
