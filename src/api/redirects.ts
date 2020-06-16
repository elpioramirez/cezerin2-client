class Redirects {
  client: { get: Function; put: Function; post: Function; delete: Function }
  resourceUrl: string
  constructor(client: {
    get: Function
    put: Function
    post: Function
    delete: Function
  }) {
    this.client = client
    this.resourceUrl = "/redirects"
  }

  list() {
    return this.client.get(this.resourceUrl)
  }

  retrieve(id: string) {
    return this.client.get(`${this.resourceUrl}/${id}`)
  }

  create(data: string) {
    return this.client.post(this.resourceUrl, data)
  }

  update(id: string, data: string) {
    return this.client.put(`${this.resourceUrl}/${id}`, data)
  }

  delete(id: string) {
    return this.client.delete(`${this.resourceUrl}/${id}`)
  }
}
export default Redirects
