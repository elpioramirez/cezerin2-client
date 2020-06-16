class ThemePlaceholders {
  client: { get: Function; post: Function; put: Function; delete: Function }
  resourceUrl: string
  constructor(client: {
    get: Function
    post: Function
    put: Function
    delete: Function
  }) {
    this.client = client
    this.resourceUrl = "/theme/placeholders"
  }

  list() {
    return this.client.get(this.resourceUrl)
  }

  retrieve(placeholderKey: string) {
    return this.client.get(`${this.resourceUrl}/${placeholderKey}`)
  }

  create(data: string) {
    return this.client.post(this.resourceUrl, data)
  }

  update(placeholderKey: string, data: string) {
    return this.client.put(`${this.resourceUrl}/${placeholderKey}`, data)
  }

  delete(placeholderKey: string) {
    return this.client.delete(`${this.resourceUrl}/${placeholderKey}`)
  }
}
export default ThemePlaceholders
