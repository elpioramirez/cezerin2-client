import fetch from "cross-fetch"
import queryString from "query-string"

class RestClient {
  baseUrl: string
  token: string
  constructor({ baseUrl, token }) {
    this.baseUrl = baseUrl
    this.token = token
  }

  getConfig(method: string, data: string) {
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    }

    if (data) {
      config.body = JSON.stringify(data)
    }
    return config
  }

  postFormDataConfig = (formData: string) => ({
    method: "post",
    body: formData,
    headers: {
      Authorization: `Bearer ${this.token}`,
    },
  })

  returnStatusAndJson = (response: Response) =>
    response
      .json()
      .then((json: string) => ({ status: response.status, json }))
      .catch(() => ({ status: response.status, json: null }))

  static returnStatusAndJsonStatic = (response: Response) =>
    response
      .json()
      .then((json: string) => ({ status: response.status, json }))
      .catch(() => ({ status: response.status, json: null }))

  get(endpoint: string, filter: string, cookie: string) {
    return fetch(
      `${this.baseUrl}${endpoint}?${queryString.stringify(filter)}`,
      this.getConfig("get", null, cookie)
    ).then(this.returnStatusAndJson)
  }

  post(endpoint: string, data: string) {
    return fetch(this.baseUrl + endpoint, this.getConfig("post", data)).then(
      this.returnStatusAndJson
    )
  }

  postFormData(endpoint: string, formData: string) {
    return fetch(
      this.baseUrl + endpoint,
      this.postFormDataConfig(formData)
    ).then(this.returnStatusAndJson)
  }

  put(endpoint: string, data: string) {
    return fetch(this.baseUrl + endpoint, this.getConfig("put", data)).then(
      this.returnStatusAndJson
    )
  }

  delete(endpoint: string) {
    return fetch(this.baseUrl + endpoint, this.getConfig("delete")).then(
      this.returnStatusAndJson
    )
  }
}
export default RestClient
