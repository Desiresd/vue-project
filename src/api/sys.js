import Vue from 'vue'
import { UI_CACHE_DB_DICT_DATA } from '@/store/mutation-types'
import { getAction } from '@/api/manage'

// 字典标签专用（通过code获取字典数组）
const ajaxGetDictItems = (code, params) => getAction(`/sys/dict/getDictItems/${code}`, params)

// 从缓存中获取字典配置
function setDictItemsFromCache (dictCode, data) {
  let result = Vue.ls.get(UI_CACHE_DB_DICT_DATA) || {}
  result[dictCode] = data
  Vue.ls.set(UI_CACHE_DB_DICT_DATA, result, 7 * 24 * 60 * 60 * 1000)
}

// 从缓存中获取字典配置
function getDictItemsFromCache (dictCode) {
  if (Vue.ls.get(UI_CACHE_DB_DICT_DATA) && Vue.ls.get(UI_CACHE_DB_DICT_DATA)[dictCode]) {
    let dictItems = Vue.ls.get(UI_CACHE_DB_DICT_DATA)[dictCode]
    return dictItems
  }
}

export async function initDictOptions (dictCode) {
  if (!dictCode) {
    return '字典Code不能为空!'
  }
  // 优先从缓存中读取字典配置
  if (getDictItemsFromCache(dictCode)) {
    let res = {}
    res = getDictItemsFromCache(dictCode)
    return res
  }
  // 获取字典数组
  let res = await ajaxGetDictItems(dictCode).then(data => {
    if (data.status === 200) {
      setDictItemsFromCache(dictCode, data)
      return data
    }
    return []
  })
  return res
}
