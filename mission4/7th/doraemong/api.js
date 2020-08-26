export const fetchData=async(username)=> {
  const res = await fetch(`https://todo-api.roto.codes/${username}?delay=1000`)
  return await res.json()
}
export const addTodo = async (username, todoText) => {
    const res = await fetch(`https://todo-api.roto.codes/${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: todoText,
        })
      })
  
    return await res.json()
  }
  export const fetchUsers = async () => {
    const res = await fetch('https://todo-api.roto.codes/users')
    return await res.json()
  }
  export const deleteTodo = async(username,id)=>{
    await fetch(`https://todo-api.roto.codes/${username}/${id}`, {
        method: 'DELETE',
      })
  }
  export const updateTodo = async(username,id)=>{
    await fetch(`https://todo-api.roto.codes/${username}/${id}/toggle`, {
        method: 'PUT',
      })
  }
