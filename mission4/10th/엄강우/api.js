export default function Api(params) {
    this.$spinner = params.$spinner

    this.showSpinner = () => {
        this.$spinner.className = "show"
    }

    this.hideSpinner = () => {
        this.$spinner.className = ""
    }

    this.fetchData = async (name) => {

        this.showSpinner()

        const data = await fetch(`https://todo-api.roto.codes/${name}?delay=1000`)
            .then( async (res) => {
                this.hideSpinner()
                return await res.json()
            })
        return data
    }

    this.addData = async (name, todo) => {
        this.showSpinner()

        await fetch(`https://todo-api.roto.codes/${name}?delay=1000`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              content: todo
            })
        })
        .then(() => {
            this.hideSpinner()
        })
    }

    this.removeTodo = async (name, id) => {
        this.showSpinner()
        await fetch(`https://todo-api.roto.codes/${name}/${id}?delay=1000`, {
            method: 'DELETE'
        })
        .then(() => {
            this.hideSpinner()
        })
    }

    this.changeTodoStatus = async (name, id) => {
        this.showSpinner()

        await fetch(`https://todo-api.roto.codes/${name}/${id}/toggle?delay=1000`, {
            method: 'PUT'
        })
        .then(() => {
            this.hideSpinner()
        })
    }

    this.removeAll = async (name) => {
        this.showSpinner()

        await fetch(`https://todo-api.roto.codes/${name}/all?delay=1000`, {
            method: 'DELETE'
        })
        .then(() => {
            this.hideSpinner()
        })
    }

    this.fetchUsers = async () => {
        this.showSpinner()

        const users = await fetch('https://todo-api.roto.codes/users?delay=1000')
            .then( async (res) => {
                this.hideSpinner()
                return await res.json()
            })
        return users
    }
}
