class AjaxRegister {
  constructor(client) {
    this.client = client
  }

  retrieve(data: string) {
    return this.client.post(`/register`, data)
  }
}
export default AjaxRegister
