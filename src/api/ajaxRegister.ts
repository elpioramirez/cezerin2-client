class AjaxRegister {
  client: { post: Function }
  constructor(client: { post: Function }) {
    this.client = client
  }

  retrieve(data: string) {
    return this.client.post(`/register`, data)
  }
}
export default AjaxRegister
