// 引用axios
import axios from 'axios'
let apiAxios = (method, url, params, success, failure) => {
  axios({
    method: method,
    url: url,
    data: (method === 'POST' || method === 'PUT' || method === 'DELETE') ? params : null,
    params: method === 'GET' ? params : null,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      console.log(res.data)
      if (res.data.code === 200) {
        if (success) {
          success(res.data)
        }
      } else {
        if (failure) {
          failure(res.data)
        } else {
          window.alert(res.data.code + ':' + res.data.msg)
        }
      }
    })
    .catch(err => {
      if (err) {
        window.alert(err)
      }
    })
}

// 返回在vue模板中的调用接口
export default {
  get: (url, params, success, failure) => {
    return apiAxios('GET', url, params, success, failure)
  },
  post: (url, params, success, failure) => {
    return apiAxios('POST', url, params, success, failure)
  },
  put: (url, params, success, failure) => {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: (url, params, success, failure) => {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
