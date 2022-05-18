export default function TodoInput({$app, onClick, onRemoveAll}){
    this.onclick = onClick; //추가용 클릭
    this.onremoveAll = onRemoveAll; // 전체 삭제용

    //input 박스용 생성
    this.$inputWrap = document.createElement('form');
    this.$inputWrap.className = 'todo-add';
        
    $app.append(this.$inputWrap);

    this.render = () => {
        this.$inputWrap.innerHTML = `<input type="text" id="todo-add-input" />
                                    <button id="todo-add-button" type="submit">할 일 추가</button>
                                    <button id="todo-removeAll" type="submit">전체 삭제</button>
                                    `;
    }

    this.$inputWrap.addEventListener("submit", e => {
        e.preventDefault(); //submit 새로고침 안되게 중지
        if (e.submitter.id === 'todo-add-button') {
            const eInput = this.$inputWrap.querySelector('#todo-add-input');
            if(eInput.value.trim() !== ''){
                this.onclick(eInput.value);
                eInput.value = '';
            }
            return
        }

        if (e.submitter.id === 'todo-removeAll') {
          this.onremoveAll();
        } 
    });

    this.render();
};
