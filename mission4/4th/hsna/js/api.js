import ErrorViewer from './ErrorViewer.js'

const API_URL = 'http://todo-api.roto.codes'

// Spinner 구현 소영님 제권님 코드 참고했습니다.
const $targetSpinner = document.querySelector('#spinner')

// 동준님 코드 참고했습니다.
const request = async (uri, method) => {
  try {
    $targetSpinner.innerHTML = '<i class="fas fa-spinner fa-5x"></i>'
    const res = await fetch(uri, method)
    $targetSpinner.innerHTML = ''
    return await res.json()
  } catch (err) {
    const $errorTarget = document.querySelector('#errorView-container')
    new ErrorViewer($errorTarget).render(err)
  }
}

// 동주님 코드 참고했습니다.
export const api = {
  getTodosJson: async username => request(`${API_URL}/${username}?delay=2000`),
  addTodo: async (username, todoText) => {
    return request(`${API_URL}/${username}?delay=2000`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ content: todoText }),
    })
  },
  removeTodo: async (username, id) => {
    return request(`${API_URL}/${username}/${id}?delay=2000`, {
      method: 'DELETE',
    })
  },
  toggleTodo: async (username, id) => {
    return request(`${API_URL}/${username}/${id}/toggle?delay=2000`, {
      method: 'PUT',
    })
  },
  getUserList: async () => request(`${API_URL}/users?delay=2000`),
}
