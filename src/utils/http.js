import axios from 'axios'
import {Toast} from 'vant'
const http = axios.create()

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://event-storage-api-ms.juejin.im/' : 'https://event-storage-api-ms.juejin.im/'
http.timeout =10000

http.interceptors.response.use(response => {
  console.log(response)
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
