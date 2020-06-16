class Settings {
  client: {
    get: Function
    put: Function
    postFormData: Function
    delete: Function
  }
  resourceUrl: string
  constructor(client: {
    get: Function
    put: Function
    postFormData: Function
    delete: Function
  }) {
    this.client = client
    this.resourceUrl = "/settings"
  }

  retrieve() {
    return this.client.get(this.resourceUrl)
  }

  update(data: string) {
    return this.client.put(this.resourceUrl, data)
  }

  retrieveEmailSettings() {
    return this.client.get(`${this.resourceUrl}/email`)
  }

  updateEmailSettings(data: string) {
    return this.client.put(`${this.resourceUrl}/email`, data)
  }

  retrieveImportSettings() {
    return this.client.get(`${this.resourceUrl}/import`)
  }

  updateImportSettings(data: string) {
    return this.client.put(`${this.resourceUrl}/import`, data)
  }

  retrieveCookieBanner(subject: string, body: string) {
    return this.client.get(`${this.resourceUrl}/cookiebanner`, subject, body)
  }

  updateCookieBanner(subject: string, body: string) {
    return this.client.put(`${this.resourceUrl}/cookiebanner`, subject, body)
  }

  retrieveEmailTemplate(name: string) {
    return this.client.get(`${this.resourceUrl}/email/templates/${name}`)
  }

  updateEmailTemplate(name: string, data: string) {
    return this.client.put(`${this.resourceUrl}/email/templates/${name}`, data)
  }

  uploadLogo(formData: string) {
    return this.client.postFormData(`${this.resourceUrl}/logo`, formData)
  }

  deleteLogo() {
    return this.client.delete(`${this.resourceUrl}/logo`)
  }
}
export default Settings
