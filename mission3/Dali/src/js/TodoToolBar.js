const REMOVE_ALL = 'rmoeve-all';

export default class TodoToolBar {
  constructor({$target}){
    this.$target = $target;
    this.init();
    //bind
    this.bindRemoveAllTodo = null;
  }
  init() {
    this.$target.addEventListener('click', ({target}) => {
      if(target.nodeName!=='BUTTON') return;
      const eventId = target.dataset.id;
      const customEvent = new CustomEvent(
        eventId,
        {
          bubbles: true,
          detail: { actionName: eventId }
        });
      target.dispatchEvent(customEvent);
    });
    this.$target.addEventListener('removeAll',  () => this.handleRemoveAll())
  }
  handleRemoveAll(){
    this.bindRemoveAllTodo();
  }


}
