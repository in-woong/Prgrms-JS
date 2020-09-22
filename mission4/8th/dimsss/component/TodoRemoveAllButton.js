export default function TodoRemoveAllButton(appElement) {
  this.init = () => {
    this.element = document.createElement('button');
    this.element.className = 'todo-remove-button';
    this.element.innerText = 'remove All';

    appElement.appendChild(this.element);
  }

  this.init();
}
