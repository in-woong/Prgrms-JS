
import {REMOVE_ALL} from './CustomEventType.js';

export default function TodoInput({ $target, onSubmit }) {
    this.$element = document.createElement('form');

    $target.appendChild(this.$element);

    this.render = () => {
        this.$element.innerHTML = `
            <input type="text" placeholder="할일은 입력하세요">
            <button type="button" class="remove-all">전체 삭제</button> 
        `
    }

    this.$element.addEventListener('submit', (e) =>{
        e.preventDefault();

        const $input = this.$element.querySelector('input')
        const todoText = $input.value

        if (todoText.length > 0) {
            onSubmit(todoText);
            $input.value = "";
        }
    })

    this.$element.addEventListener('click', (e) => {
        if (e.target.className === 'remove-all'){
            //coustom evnet
            //이벤트 드릴링 찾아보기 
            //하지만 추적하기 어려워짐
            //모든 상황 예외처리
            const customEvent = new CustomEvent(REMOVE_ALL);
            window.dispatchEvent(customEvent);
        }
    })

    this.render();
}