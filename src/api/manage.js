import myAxios from './axios'

// GET
export function getAction (url, parameter) {
  let SIGN_HEADER = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return myAxios({
    url: url,
    method: 'get',
    params: parameter,
    headers: SIGN_HEADER
  })
}

// POST
export function postAction (url, parameter) {
  let SIGN_HEADER = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return myAxios({
    url: url,
    method: 'post',
    data: parameter,
    headers: SIGN_HEADER
  })
}

// PUT
export function putAction (url, parameter) {
  let SIGN_HEADER = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return myAxios({
    url: url,
    method: 'put',
    data: parameter,
    headers: SIGN_HEADER
  })
}

// DELETE
export function deleteAction (url, parameter) {
  return myAxios({
    url: url,
    method: 'delete',
    params: parameter
  })
}

// 预览测试
export function filePreview () {
  console.log('预览测试')
  return {}
}

// 下载测试
export function fileDownload () {
  console.log('下载测试')
  return {}
}
