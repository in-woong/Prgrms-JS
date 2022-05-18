import { checkParam } from "../util/CheckParam.js";

export default function TodoList({$app, initialState, onChange, onDelete}){
    if(!new.target) { //보너스: new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기
        throw new Error('new 키워드를 사용해주세요!');
    }
    this.state = initialState;
    this.onchange = onChange;
    this.ondelete = onDelete;

    this.$List = document.createElement('div');
    this.$List.className = "todo-list";

    $app.appendChild(this.$List);


    //보너스 문제 setState 새롭게 렌더링
    this.setState = (nextState) => {
      this.state = nextState;
      this.render();
    }

    this.render = () => {
        if(!checkParam(this.state)){ //nextData도 데이터 체크
            throw new Error('올바른 데이터가 아닙니다.');
        }

        const ListTemplates = this.state.map((data, idx) => {
                                        return `<li data-idx='${idx}'>${data.isCompleted? `${data.text? data.text: ''}` : 
                                                    `<s>${data.text? data.text: ''}</s>`}
                                                    <button data-idx='${idx}'>삭제</button>
                                                </li>`}).join('');
        
        this.$List.innerHTML = `<ul>${ListTemplates}</ul>`;
    }

    //todo-list 목록 이벤트 모음
    this.$List.addEventListener('click', e => {
        const eTarget = e.target;
        if(eTarget.tagName === 'LI'){
            const idx = eTarget.dataset.idx;
            const flag = this.state[idx].isCompleted? false : true;
            this.onchange(idx, flag);
        }
        if(eTarget.tagName === 'S'){
            const idx = eTarget.closest('LI').dataset.idx;
            const flag = this.state[idx].isCompleted? false : true;
            this.onchange(idx, flag);
        }
        if(eTarget.tagName === 'BUTTON'){
            const idx = eTarget.dataset.idx;
            this.ondelete(idx);
        }
    });

    this.render();
};
