import axios from 'axios'

axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const request = (method, url, data) => {
  console.log('The URL being fetched : ' + url)
  return axios({
    method: method,
    url: url,
    data: data,
  })
}
