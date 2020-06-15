class AjaxForgotPassword {
  client: { post: Function; put: Function }
  constructor(client: { post: Function; put: Function }) {
    this.client = client
  }

  retrieve(data: string) {
    return this.client.post(`/forgot-password`, data)
  }

  update(data: string) {
    return this.client.put(`/forgot-password`, data)
  }
}
export default AjaxForgotPassword
