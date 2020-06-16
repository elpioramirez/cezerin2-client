class Pages {
  constructor(client) {
    this.client = client
    this.resourceUrl = "/pages"
  }

  list(filter: string) {
    return this.client.get(this.resourceUrl, filter)
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
export default Pages
