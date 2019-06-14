import Axios from 'axios'
import { Toast } from 'vant'

const http = Axios.create()

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http:localhost:8080/' : 'http://localhost:8080/'
http.timeout =10000

http.interceptors.response.use(response => {
  let res = response.data
  if(res.s === 1) {
    return res.d
  } else {
    Toast(res.m)
  }
}, error => {
  Toast(error.message)
})

export default http