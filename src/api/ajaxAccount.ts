class AjaxAccount {
  constructor(client) {
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
