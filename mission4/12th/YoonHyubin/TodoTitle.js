export default function TodoTitle(params) {
    const $target = document.createElement('div');
    params.$target.appendChild($target);

    this.state = '';

    this.render = function () {
        const htmlString = `${this.state.userName ? `${this.state.userName}'s` : ''} Todo`;
        $target.innerHTML = this.state.isReadOnly ? `<h3><i>${htmlString} (수정 불가)</i></h3>` : `<h3>${htmlString} (수정 가능)</h3>`;
    };

    this.setState = function (newState) {
        this.state = newState;
        this.render();
    }
}
