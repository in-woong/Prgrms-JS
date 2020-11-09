import { checkTarget } from '../validator/validation.js'

function TodoRemoveAll(targetId) {
    this.targetId = targetId;
    this.validate = () => {
        if(new.target !== TodoRemoveAll) {
            throw new Error('new 키워드로 함수의 인스턴스를 생성해야 합니다.')
        }
        checkTarget(this.targetId);
        this.$removeAllBtn = document.getElementById(this.targetId);
    };
    this.addRemoveAllEvent = () => {
        this.$removeAllBtn.addEventListener('click', (event) => {
            const removeAllEvent = new CustomEvent('remove-all');
            event.target.dispatchEvent(removeAllEvent);
        })
    };
    this.init = () => {
        this.validate();
        this.addRemoveAllEvent();
    };
    
    this.init();
}

export default TodoRemoveAll
