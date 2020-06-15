class WebStoreServices {
  client: { get: Function; post: Function }
  resourceUrl: string
  constructor(client: { get: Function; post: Function }) {
    this.client = client
    this.resourceUrl = "/services"
  }

  list(filter: string) {
    return this.client.get(this.resourceUrl, filter)
  }

  retrieve(id: string) {
    return this.client.get(`${this.resourceUrl}/${id}`)
  }

  enable(id: string) {
    return this.client.post(`${this.resourceUrl}/${id}/enable`)
  }

  disable(id: string) {
    return this.client.post(`${this.resourceUrl}/${id}/disable`)
  }
}
export default WebStoreServices
