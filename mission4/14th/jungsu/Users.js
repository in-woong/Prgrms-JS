

export default function Users({ $target, initialState, onChange }) {
    this.$element = document.createElement('select');
    this.state = initialState;

    $target.appendChild(this.$element);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }


    this.render = () => {
        this.$element.innerHTML = `<option value="none">=== 선택 ===</option>` + this.state
            .map((state) => {
                return `<option value=${state}>${state}</option>`
            }).join('');
    }

    this.$element.addEventListener('change', (e) => {
        // 색상 바꾸기 잘 안되서 포기 => select tag로 수정

        // const $li = e.target.closest('li');

        // if ($li !== null) {
        //     const { name } = $li.dataset;

        //     if (e.target.tagName === 'LI') {
        //         $li.color = 'blue';
        //         onClick(name);
        //     }
        // }
        onChange(e.target.value);
    })

    this.render();

}