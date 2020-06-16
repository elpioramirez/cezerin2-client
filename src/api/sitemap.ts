class Sitemap {
  client: { get: Function }
  resourceUrl: string
  constructor(client: { get: Function }) {
    this.client = client
    this.resourceUrl = "/sitemap"
  }

  list(filter: string) {
    return this.client.get(this.resourceUrl, filter)
  }

  retrieve(filter: string) {
    return this.client.get(this.resourceUrl, filter)
  }
}
export default Sitemap
