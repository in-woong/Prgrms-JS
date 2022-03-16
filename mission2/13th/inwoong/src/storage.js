export default function Storage() {
  this.setItem = (data) => {
    window.localStorage.setItem('todo', JSON.stringify(data))
  }
  this.getItem = () => {
    const data = window.localStorage.getItem('todo')
    return data ? JSON.parse(data) : []
  }
  this.removeItem = () => {
    window.localStorage.removeItem('todo')
  }
  this.clear = () => {
    window.localStorage.clear()
  }
}
