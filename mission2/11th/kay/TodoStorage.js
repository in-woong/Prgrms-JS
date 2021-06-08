function TodoStorage(key) {
    this.key = key
    this.storage = window.localStorage
  
    this.get = function () {
      try {
        return JSON.parse(this.storage.getItem(this.key));
      } catch(e) {
        console.log(e);
      }
    }
  
    this.set = function (item) {
      try {
        this.storage.setItem(this.key, JSON.stringify(item))
      } catch(e) {
        console.log(e);
      }
    }
  
    this.remove = function () {
      try {
        this.storage.removeItem(this.key)
      } catch {
        console.log(e);
      }
    }
  
    this.clear = function () {
      try {
        this.storage.clear()
      } catch {
        console.log(e);
      }
    }
  }
  
  export default TodoStorage