import { BASE_URL } from './config.js'
import { noticeError } from '../shared/util.js'
import { validateApiResponse, validateUserId } from '../shared/validator.js'

export const fetchTodoList = async params => {
    const { userId } = params
    validateUserId(userId)
    try {
        const res = await fetch(`${BASE_URL}/${userId}`)
        validateApiResponse(res)

        return await res.json()
    } catch {
        noticeError(error)
    }
}

export const putTodoList = async params => {
    const { userId, todoId } = params
    validateUserId(userId)
    try {
        const res = await fetch(`${BASE_URL}/${userId}/${todoId}/toggle`, {
            method: 'PUT'
        })
        validateApiResponse(res)
    } catch {
        noticeError(error)
    }
}

export const deleteTodoList = async params => {
    const { userId, todoId } = params
    validateUserId(userId)
    try {
        const res = await fetch(`${BASE_URL}/${userId}/${todoId}`, {
            method: 'DELETE'
        })
        validateApiResponse(res)
    } catch {
        noticeError(error)
    }
}

export const postTodoList = async params => {
    const { userId, todoText } = params
    validateUserId(userId)
    try {
        const res = await fetch(`${BASE_URL}/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: todoText
            })
        })
        validateApiResponse(res)
    } catch {
        noticeError(error)
    }
}
