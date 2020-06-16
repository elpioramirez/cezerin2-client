class ThemeAssets {
  constructor(client) {
    this.client = client
    this.resourceUrl = "/theme/assets"
  }

  uploadFile(formData: string) {
    return this.client.postFormData(this.resourceUrl, formData)
  }

  deleteFile(fileName: string) {
    return this.client.delete(`${this.resourceUrl}/${fileName}`)
  }
}
export default ThemeAssets
