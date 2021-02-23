export default function Api() {
    this.fetchData = async (name) => {
        const res = await fetch(`https://todo-api.roto.codes/${name}`)
        return await res.json()
    }

    this.addData = async (name, todo) => {
        await fetch(`https://todo-api.roto.codes/${name}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              content: todo
            })
        })
    }

    this.removeTodo = async (name, id) => {
        await fetch(`https://todo-api.roto.codes/${name}/${id}`, {
            method: 'DELETE'
        });
    }

    this.changeTodoStatus = async (name, id) => {
        await fetch(`https://todo-api.roto.codes/${name}/${id}/toggle`, {
            method: 'PUT'
        })
    }

    this.removeAll = async (name) => {
        await fetch(`https://todo-api.roto.codes/${name}/all`, {
            method: 'DELETE'
        })
    }

    this.fetchUsers = async () => {
        const res = await fetch('https://todo-api.roto.codes/users')
        return await res.json()
    }
}
