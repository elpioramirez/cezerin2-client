class AppSettings {
  client: { get: Function; put: Function }
  resourceUrl: string
  constructor(client: { get: Function; put: Function }) {
    this.client = client
    this.resourceUrl = "/apps"
  }

  retrieve(appKey: string) {
    return this.client.get(`${this.resourceUrl}/${appKey}/settings`)
  }

  update(appKey: string, data: string) {
    return this.client.put(`${this.resourceUrl}/${appKey}/settings`, data)
  }
}
export default AppSettings
