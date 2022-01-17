import { FETCH_URL, DELAY } from '../assets/constants.js'

export const request = {
  async getUsers() {
    try {
      const response = await fetch(`${FETCH_URL}/users`)
      if(response.ok) {
        return await response.json()
      } else {
        throw new Error('유저 목록을 불러올 수 없습니다.')
      }
    } catch(err) {
      console.error(err)
    }
  },

  // 할 일 목록 불러오기
  async getTodo(userName) {
    try {
      const response = await fetch(`${FETCH_URL}/${userName}?delay=${DELAY}`)
      if(response.ok) {
        return await response.json()
      } else {
        throw new Error('할 일 목록을 불러올 수 없습니다.')
      }
    } catch(err) {
      console.error(err)
    }
  },

  // 할 일 추가하기
  async addTodo(userName, todo) {
    try {
      const response = await fetch(`${FETCH_URL}/${userName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: `${todo}`
        })
      })
      if(response.ok) {
        return response
      } else {
        throw new Error('할 일 추가가 정상적으로 처리되지 않았습니다!')
      }
    } catch(err) {
      console.error(err)
    }
    
  },

  // 할 일 삭제하기
  async deleteTodo(userName, todo_id) {
    try {
      const response = await fetch(`${FETCH_URL}/${userName}/${todo_id}`, {
        method: 'DELETE'
      })
      if(response.ok) {
        return response
      } else {
        throw new Error('할 일 삭제가 정상적으로 처리되지 않았습니다!')
      }
    } catch(err) {
      console.error(err)
    }
  },

  // 특정 사용자의 할 일 전체 삭제하기
  async deleteAllTodo(userName) {
    try {
      const response = await fetch(`${FETCH_URL}/${userName}/all`, {
        method: 'DELETE'
      })
      if(response.ok) {
        return response
      } else {
        throw new Error('전체 할 일 삭제가 정상적으로 처리되지 않았습니다!')
      }
    } catch(err) {
      console.error(err)
    }
  },

  // 할 일 완료여부 토클하기
  async toggleTodo(userName, todo_id) {
    try {
      const response = await fetch(`${FETCH_URL}/${userName}/${todo_id}/toggle`, {
        method: 'PUT'
      })
      if(response.ok) {
        return response
      } else {
        throw new Error('할 일 완료가 처리되지 않았습니다.')
      }
    } catch(err) {
      console.error(err)
    }
  }
}
