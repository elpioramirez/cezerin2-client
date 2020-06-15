class AjaxLogin {
  client: { post: Function }
  constructor(client: { post: Function }) {
    this.client = client
  }

  retrieve(data: string) {
    return this.client.post(`/login`, data)
  }
}
export default AjaxLogin
