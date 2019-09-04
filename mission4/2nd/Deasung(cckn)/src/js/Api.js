export default function Api(baseUrl, username) {
  this.baseUrl = baseUrl
  this.username = username

  this.getTodos = async function() {
    const res = await fetch(`${this.baseUrl}${this.username}`)
    return res.json()
  }

  this.toggleTodo = async function(id) {
    const res = await fetch(`${this.baseUrl}${this.username}/${id}/toggle`, {
      method: 'PUT',
    })
    return res
  }

  this.removeTodo = async function(id) {
    const res = await fetch(`${this.baseUrl}${this.username}/${id}`, {
      method: 'DELETE',
    })
    return res
  }

  this.addTodo = async function(todoText) {
    const res = await fetch(`${this.baseUrl}${this.username}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: todoText,
      }),
    })

    return res
  }
}
