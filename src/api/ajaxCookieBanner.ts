class AjaxCookieBanner {
  client: { post: Function }
  constructor(client: { post: Function }) {
    this.client = client
  }

  retrieve(data: string) {
    return this.client.post(`/`, data)
  }
}
export default AjaxCookieBanner
