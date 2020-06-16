class ProductImages {
  constructor(client) {
    this.client = client
  }

  list(productId: string) {
    return this.client.get(`/products/${productId}/images`)
  }

  update(productId: string, imageId: string, data: string) {
    return this.client.put(`/products/${productId}/images/${imageId}`, data)
  }

  upload(productId: string, formData: string) {
    return this.client.postFormData(`/products/${productId}/images`, formData)
  }

  delete(productId: string, imageId: string) {
    return this.client.delete(`/products/${productId}/images/${imageId}`)
  }
}
export default ProductImages
