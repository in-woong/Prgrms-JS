import { BASE_URL } from './config.js'
import { noticeError } from '../shared/util.js'
import { validateApiResponse } from '../shared/validator.js'

export const fetchUsers = async () => {
    try {
        const res = await fetch(`${BASE_URL}/users`)
        validateApiResponse(res)

        return await res.json()
    } catch {
        noticeError(error)
    }
}
