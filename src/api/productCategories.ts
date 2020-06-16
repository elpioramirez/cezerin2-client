class ProductCategories {
  client: {
    get: Function
    put: Function
    post: Function
    postFormData: Function
    delete: Function
  }
  resourceUrl: string
  constructor(client: {
    get: Function
    put: Function
    post: Function
    postFormData: Function
    delete: Function
  }) {
    this.client = client
    this.resourceUrl = "/product_categories"
  }

  list(filter: string) {
    return this.client.get(this.resourceUrl, filter)
  }

  retrieve(id: string) {
    return this.client.get(`${this.resourceUrl}/${id}`)
  }

  create(data: string) {
    return this.client.post(this.resourceUrl, data)
  }

  update(id: string, data: string) {
    return this.client.put(`${this.resourceUrl}/${id}`, data)
  }

  delete(id: string) {
    return this.client.delete(`${this.resourceUrl}/${id}`)
  }

  uploadImage(categoryID: string, formData: string) {
    return this.client.postFormData(
      `${this.resourceUrl}/${categoryID}/image`,
      formData
    )
  }

  deleteImage(id: string) {
    return this.client.delete(`${this.resourceUrl}/${id}/image`)
  }
}
export default ProductCategories
