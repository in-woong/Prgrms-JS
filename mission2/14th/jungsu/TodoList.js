

export default function TodoList({ $target, initialState, onClick, onRemove }) {
    this.$element = document.createElement('ul');
    $target.appendChild(this.$element);

    this.state = initialState;

    // #50 validator
    if (!new.target) {
        //new 키워드로 선언되지 않은 경우
        throw new Error("new 키워드로 함수를 선언해주세요.");
    }

    this.stateValidator = function (state) {
        if (typeof state == 'undefined' || state == null) {
            //할당하기 전 호출한 경우
            throw new Error("[data]이 할당되어 있지 않습니다.");
        } else if (!Array.isArray(state)) {
            //배열이 아닌 경우
            throw new Error("[data]가 배열이 아닙니다.");
        } else if (state.some(data => !("text", "isCompleted" in data))) {
            // 원하는 구조로 호출되지 않은 경우
            throw new Error("[state] 배열에 key가 잘못되었습니다.");
        }
    }
    // #50 end

    this.stateValidator(this.state);

    this.render = function () {
        // //#66 계획 완료시 삭선처리
        // const resultState = this.state.map(state => {
        //     return state.isCompleted ? { ...state, text: `<s>${state.text}</s>` } : state;
        // });


        this.$element.innerHTML = this.state.map((state, idx) => {
            return `
            <li data-index=${idx}>
            ${state.isCompleted ? `(완료)${state.text}` : state.text} 
            <button>❌</button>
            </li>`
        }).join('');

        // const $todoDeleteButton = $target.querySelector('#todo-delete-button')

        // if ($todoDeleteButton !== null) {
        //     $todoDeleteButton.addEventListener("click", evnet => {
        //         const idx = evnet.id + 1;
        //         this.deletestate(idx);
        //     });
        // }
    }

    // #67 보너스 구현사항å
    this.setState = (nextState) => {
        this.stateValidator(nextState);
        this.state = nextState;
        this.render();
    }

    this.render();


    // 델리게이트 버블링
    this.$element.addEventListener('click', (e) => {
        const $li = e.target.closest('li');

        if ($li !== null) {
            const { index } = $li.dataset;

            if (e.target.tagName === 'BUTTON') {
                onRemove(parseInt(index));
            } else if (e.target.tagName === 'LI') {
                onClick(parseInt(index));
            }
        }
    })
}