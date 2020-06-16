class Theme {
  client: { get: Function; postFormData: Function }
  constructor(client: { get: Function; postFormData: Function }) {
    this.client = client
  }

  export() {
    return this.client.get("/theme/export")
  }

  install(formData: string) {
    return this.client.postFormData("/theme/install", formData)
  }
}
export default Theme
