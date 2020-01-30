// bubbles 를 주지 않으면, 전파되지 않았습니다.
const PURGE_EVENT = new CustomEvent('delete-all', {bubbles: true});

class PurgeBtn {
  constructor(btnId) {
    this.$deleteBtn = document.querySelector(btnId);

    // NOTE:
    //
    // addEvenetListener의 인자로 멤버함수를 넘기는 경우 this가 문제가 됩니다.
    // 다음처럼 bind 해주지 않으면 onClick()에서 this 에는 HTML tag 가 담겨있게 됩니다.
    // this.$deleteBtn.addEventListener('click', this.onClick.bind(this), false);

    // 다른 방법으로는 클로저를 이용해서 this 를 암묵적으로 바인딩시키는 방법도 있었습니다.
    // this.$deleteBtn.addEventListener('click', e => this.onClick(), false);

    // 호출하는 쪽이 편한 건 클래스필드를 넘겨주는 방법일 것 같았습니다.
    // this.$deleteBtn.addEventListener('click', this.onClick2, false);

    // 저는 bind를 명시하는 편이 제일 깔끔해 보였습니다.
    // 브라우저에서 발생하는 이벤트의 리스너에 대해서는 이름으로 차별을 주거나 그룹핑을 하거나
    // 뭔가 더 명시적인 방법으로 구분되면 버그를 덜 만들 것 같습니다. 여기서는 onXXX를 컨벤션으로 했습니다.
    this.$deleteBtn.addEventListener('click', this.onClick.bind(this), false);
  }

  // 멤버함수이지만 브라우저 이벤트 발생으로 호출될 때, this에는 PurgeBtn이 아닌 HTML 태가 들어있습니다.
  // 즉 this를 제대로 binding 해주지 않으면 $deleteBtn 을 찾을 수 없습니다.
  onClick() {
    this.$deleteBtn.dispatchEvent(PURGE_EVENT);
  }

  // 이 함수는 클로저니까 정의되는 순간의 컨텍스트를 저장합니다. 즉 여기에서 this는 PurgeBtn의 인스턴스입니다.
  // 이 녀석을 addListener의 인자로 주면 따로 bind 할 필요가 없습니다. 관련 키워드는 클래스필드였습니다.
  onClick2 = () => {
    this.$deleteBtn.dispatchEvent(PURGE_EVENT);
  }
}
