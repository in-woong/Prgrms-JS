import { debounce } from './util.js'

function SearchInput({
  elementId,
  searchJjals
}) {
  this.$sectionSearchInput = document.querySelector(`#${elementId}`);
  this.handleChange = debounce((event) => {searchJjals(event.target.value.trim())})
  this.render = () => {
    this.inputTag = document.createElement('input');
    this.inputTag.type = 'text';
    this.$sectionSearchInput.appendChild(this.inputTag);
  }

  this.bindEventHandler = () => {
    this.inputTag.addEventListener('keypress', this.handleChange);
  }
  this.render();
  this.bindEventHandler();
}

export default SearchInput
