export default function TodoItem(text) {
  this._id = Math.random().toString(36).substr(2, 16)
  this._text = text
  this._isCompleted = false
}
