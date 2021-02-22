export default function Api(name) {
    this.name = name

    this.fetchData = async () => {
        const res = await fetch(`https://todo-api.roto.codes/${this.name}`)
        return await res.json()
    }

    this.addData = async (todo) => {
        await fetch(`https://todo-api.roto.codes/${this.name}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              content: todo
            })
        })
    }

    this.removeTodo = async (id) => {
        await fetch(`https://todo-api.roto.codes/${name}/${id}`, {
            method: 'DELETE'
        });
    }

    this.changeTodoStatus = async (id) => {
        await fetch(`https://todo-api.roto.codes/${name}/${id}/toggle`, {
            method: 'PUT'
        })
    }

    this.removeAll = async () => {
        await fetch(`https://todo-api.roto.codes/${name}/all`, {
            method: 'DELETE'
        })
    }
}
