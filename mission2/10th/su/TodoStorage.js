function TodoStorage(key) {
  this.key = key
  this.storage = window.localStorage

  this.get = function () {
    return JSON.parse(this.storage.getItem(this.key))
  }

  this.set = function (item) {
    this.storage.setItem(this.key, JSON.stringify(item))
  }

  this.remove = function () {
    this.storage.removeItem(this.key)
  }

  this.clear = function () {
    this.storage.clear()
  }
}

export default TodoStorage
