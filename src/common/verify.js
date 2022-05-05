
// 校验邮箱
export const checkEmail = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('邮箱不能为空'))
  }
  let reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的邮箱'))
  }
}

// 校验电话
export const checkPhone = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('电话不能为空'))
  }
  let reg = /^1[3|4|5|6|7|8|9][0-9]{9}$/
  let reg1 = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/
  if (reg.test(value) || reg1.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的电话'))
  }
}

// 校验邮编
export const checkCode = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('邮编不能为空'))
  }
  let reg = /^[0-9]{6}$/
  if (reg.test(value)) {
    callback()
  } else {
    callback(new Error('请输入正确的邮编'))
  }
}
