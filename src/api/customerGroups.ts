class CustomerGroups {
  client: { get: Function; post: Function; put: Function; delete: Function }
  resourceUrl: string
  constructor(client: {
    get: Function
    post: Function
    put: Function
    delete: Function
  }) {
    this.client = client
    this.resourceUrl = "/customer_groups"
  }

  list(filter: string) {
    return this.client.get(this.resourceUrl, filter)
  }

  retrieve(id: string, filter: string) {
    return this.client.get(`${this.resourceUrl}/${id}`, filter)
  }

  create(data: string) {
    return this.client.post(`${this.resourceUrl}`, data)
  }

  update(id: string, data: string) {
    return this.client.put(`${this.resourceUrl}/${id}`, data)
  }

  delete(id: string) {
    return this.client.delete(`${this.resourceUrl}/${id}`)
  }
}
export default CustomerGroups
