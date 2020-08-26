import { BASE_URL } from './constants.js'
import { isPositiveNumber, isNotEmpty } from './validator.js'

export const GET_USER_LIST = 'getUserList'

class UserAPI {
  constructor(loadingNoticeId, delay) {
    isPositiveNumber(delay)
    this.$loadingNotice = this.getLoadingNotice(loadingNoticeId)
    this.delay = delay
    this.isLoading = false
  }

  getLoadingNotice = (loadingNoticeId) => {
    const $loadingNotice = document.getElementById(loadingNoticeId)
    isNotEmpty($loadingNotice)
    return $loadingNotice
  }

  getUserList = async () => {
    const response = await fetch(`${BASE_URL}/users?delay=${this.delay}`)
    const userList = await response.json()
    return userList
  }

  setLoading = (label) => {
    this.isLoading = true
    this.$loadingNotice.innerHTML = `<p>Now wait for ${label}</p>`
  }

  resetLoading = () => {
    this.isLoading = false
    this.$loadingNotice.innerHTML = ''
  }

  callAPI = async (apiName) => {
    if (this.isLoading) return
    this.setLoading(apiName)
    let result = null
    switch (apiName) {
      case GET_USER_LIST: {
        result = await this.getUserList()
        break
      }
      default: {
        throw new Error(`Invalid api name: ${apiName}`)
      }
    }

    this.resetLoading()
    if (result !== null) return result
  }
}

export default UserAPI
