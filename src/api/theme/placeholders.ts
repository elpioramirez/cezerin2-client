class ThemePlaceholders {
  constructor(client) {
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
