export default function SearchInput({$target, onSearchKeyword}) {

  this.target = $target;
  this.$input = document.createElement('input');
  this.$input.id = 'search-keyword';

  this.bindEvents = () => {
    this.$input.addEventListener('keyup', onSearchKeyword);    
  };

  this.render = () => {
    this.target.appendChild(this.$input);
  };

  this.render();
  this.bindEvents();
}
