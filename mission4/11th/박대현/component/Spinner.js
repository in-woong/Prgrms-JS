export default function($parent) {
  // spinner의 DOM 요소
  const elements = {
    $spinner: Object.assign(document.createElement('div'), {
      className : 'spinner-wrapper hidden',
      innerHTML : 
        `<div class="spinner">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>`
    }),
  };

  // render
  const renders = {
    spinnerOffRender : () => {
      elements.$spinner.classList.add('hidden');
    },
    spinnerOnRender : () => {
      elements.$spinner.classList.remove('hidden');
    }
  }

  // mount
  const mount = () => {
    $parent.appendChild(elements.$spinner);
  }

  // 상위 컴포넌트를 위한 메소드
  this.renders = renders;

  //////////////////////////////////////////////
  mount();
}