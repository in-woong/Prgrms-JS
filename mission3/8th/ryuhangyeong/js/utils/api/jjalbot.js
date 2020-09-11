import { request } from './request.js'

export const END_POINT = 'https://jjalbot.com/api/jjals'

export const getListByKeyword = (keyword) =>
  request(`${END_POINT}?text=${keyword}`)
