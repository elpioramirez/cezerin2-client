class AjaxAccount {
  client: { post: Function; put: Function }
  constructor(client: { post: Function; put: Function }) {
    this.client = client
  }

  retrieve(data: string) {
    return this.client.post(`/customer-account`, data)
  }

  update(data: string) {
    return this.client.put(`/customer-account`, data)
  }
}
export default AjaxAccount
