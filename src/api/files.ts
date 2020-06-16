class Files {
  client: { get: Function; postFormData: Function; delete: Function }
  resourceUrl: string
  constructor(client: {
    get: Function
    postFormData: Function
    delete: Function
  }) {
    this.client = client
    this.resourceUrl = "/files"
  }

  list(filter: string) {
    return this.client.get(this.resourceUrl, filter)
  }

  upload(formData: string) {
    return this.client.postFormData(this.resourceUrl, formData)
  }

  delete(fileName: string) {
    return this.client.delete(`${this.resourceUrl}/${fileName}`)
  }
}
export default Files
