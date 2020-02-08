import { searchResultTemplate } from './utils/template.js'

export default function SearchResult(data, $target) {
  this._data = data
  this._target = $target
  this.setState = (data) => {
    this._data = data
  }

  this.render = () => {
    this._target.innerHTML = searchResultTemplate(this._data)
  }
}
