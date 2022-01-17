import { jsonParse, jsonStringify } from './json.js'

const getStorage = ({ key }) => jsonParse({ value: localStorage.getItem(key) })
const setStorage = ({ key, value }) =>
  localStorage.setItem(key, jsonStringify({ value }))

export { getStorage, setStorage }
