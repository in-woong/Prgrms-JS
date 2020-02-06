import { validate } from './utils.js'

const SERVER = 'http://todo-api.roto.codes'


class TodoAPI {
  constructor(username) {
    if (!username)
      throw Error("give me a valid username");

    this.username = username
    this.items = []
    this.itemCallbacks = []
    this.endpoint = `${SERVER}/${this.username}`
  }

  async load() {
    const res = await fetch(`${this.endpoint}`)
    return await res.json()
  }

  async loadUsers() {
    const res = await fetch(`${SERVER}/users`)
    return await res.json()
  }

  async save(items) {
    const res = await fetch(`${this.endpoint}`)
    localStorage.setItem('todoItems', JSON.stringify(items))
  }

  async setUser(username) {
    this.username = username
    this.endpoint = `${SERVER}/${this.username}`
    await this.update()
  }

  notify() {
    this.itemCallbacks.forEach( (renderer) => {
      renderer.setState(this.items, this.username)
    })
  }

  async update() {
    this.items = await this.load()
    this.notify()
  }

  addListener(listner) {
    this.itemCallbacks.push(listner)
  }

  async addItem(txt, done) {
    validate('text must not empty', () => txt.length <= 0)

    await fetch(`${this.endpoint}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({content: txt})})

    await this.update()
  }

  async doneItem(_id) {
    await fetch(`${this.endpoint}/${_id}/toggle`, {method: 'PUT'})
    await this.update()
  }

  async removeItem(_id) {
    await fetch(`${this.endpoint}/${_id}`, {method: 'DELETE'})
    await this.update()
  }

  async purgeAll() {
    for (const item of this.items) 
      await fetch(`${this.endpoint}/${item._id}`, {method: 'DELETE'});
    await this.update();
  }
}

export default TodoAPI
