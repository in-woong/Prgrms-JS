import { checkTarget } from '../validator/validation.js'
import { REMOVE_ALL_EVENT } from '../data/constant.js'

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
            const removeAllEvent = new CustomEvent(REMOVE_ALL_EVENT);
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
