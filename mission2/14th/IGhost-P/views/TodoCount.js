import { $ } from '../helpers.js';

export function TodoCount() {
  this.$parentEl = $('.count--box');
  this.target = $('ul');

  this.addHandlerWhenDataMutate = function (handler) {
    let option = {
      attributes: true,
      childList: true,
      characterData: true,
    };
    let observer = new MutationObserver(() => {
      handler();
    });
    observer.observe(this.target, option);
  };

  this.render = function (allData, completedData) {
    this.$parentEl.innerHTML = `
        <div>총 Todo : ${allData}</div>
        <div>완료된 Todo :${completedData} </div>
      `;
  };
}
