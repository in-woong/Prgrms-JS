/* global fetch */
const requestToApi = (resource) => {
    const APIURL = `https://todo-api.roto.codes/${resource}/`

    return async (options, suffix = "") => {
        const fetchResponse = await fetch(APIURL + suffix, options)

        if (!fetchResponse.ok) {
            throw new Error("네트워크 에러")
        }
        return await fetchResponse.json()
    }
}

export default class ToDoAPI {
    constructor(userName) {
        this.request = requestToApi(userName)
    }

    async getToDo() {
        return await this.request()
    }

    async addToDo({ content }) {
        return await this.request({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content,
            }),
        })
    }

    async deleteToDo({ _id }) {
        return await this.request({
            method: "DELETE",

        }, _id)
    }

    async deleteAllToDo() {
        return await this.request({
            method: "DELETE",
        }, "all")
    }

    async toggleCompleted({ _id }) {
        return await this.request({
            method: "PUT",
        }, `${_id}/toggle`)
    }

    static async getUserList() {
        return await requestToApi("users")()
    }
}
