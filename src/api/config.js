import request from './request'

const http = (type, url, params, showMsg = true) => {
  return new Promise((resolve, reject) => {
    request[type](url, params).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export const get = (url, params = {}, showMsg = false) => http('get', url, { params }, showMsg)

export const put = (url, params = {}, showMsg) => http('put', url, params, showMsg)

export const post = (url, params = {}, showMsg) => http('post', url, params, showMsg)

export const del = (url, data = {}, showMsg) => http('delete', url, { data }, showMsg)
