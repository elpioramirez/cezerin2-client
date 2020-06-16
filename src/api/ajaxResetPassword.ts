class AjaxResetPassword {
  client: { post: Function; put: Function }
  constructor(client: { post: Function; put: Function }) {
    this.client = client
  }

  retrieve(data: string) {
    return this.client.post(`/reset-password`, data)
  }

  update(data: string) {
    return this.client.put(`/reset-password`, data)
  }
}
export default AjaxResetPassword
