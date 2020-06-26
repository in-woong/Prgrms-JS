import { API_URL } from './contstant.js'
import ErrorView from './component/ErrorView.js'

export async function getTodoData(username) {
  try {
    const res = await fetch(`${API_URL}/${username}?delay=1000`)
    const data = await res.json()

    return data
  } catch (e) {
    const errorView = new ErrorView({
      $target: document.querySelector('#todo-list')
    }).render()
  }
}

export async function getUserData() {
  try {
    const res = await fetch(`${API_URL}/users`)
    const data = await res.json()

    return data
  } catch (e) {
    const errorView = new ErrorView({
      $target: document.querySelector('#user-list')
    }).render()
  }
}

export async function addData(username, todoText) {
  try {
    await fetch(`${API_URL}/${username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: todoText,
      }),
    })
  } catch (e) {
    const errorView = new ErrorView({
      $target: document.querySelector('#user-list')
    }).render()
  }
}

export async function removeData(username, id) {
  try {
    await fetch(`${API_URL}/${username}/${id}`, {
      method: 'DELETE',
    })
  } catch (e) {
    const errorView = new ErrorView({
      $target: document.querySelector('#user-list')
    }).render()
  }
}

export async function toggleData(username, id) {
  try {
    await fetch(`${API_URL}/${username}/${id}/toggle`, {
      method: 'PUT',
    })
  } catch (e) {
    const errorView = new ErrorView({
      $target: document.querySelector('#user-list')
    }).render()
  }
}
