class ThemeSettings {
  client: { get: Function; put: Function }
  constructor(client: { get: Function; put: Function }) {
    this.client = client
  }

  retrieve() {
    return this.client.get("/theme/settings")
  }

  update(data: string) {
    return this.client.put("/theme/settings", data)
  }

  retrieveSchema() {
    return this.client.get("/theme/settings_schema")
  }
}
export default ThemeSettings
