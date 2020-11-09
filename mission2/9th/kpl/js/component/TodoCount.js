import {checkTarget} from '../validator/validation.js'

function TodoCount(targetId) {
    this.targetId = targetId;
    this.validate = () => {
        if(new.target !== TodoCount) {
            throw new Error('new 키워드로 함수의 인스턴스를 생성해야 합니다.');
        }
        checkTarget(this.targetId);
    };
    this.render = () => {
        const $todoCount = document.querySelector(`#${this.targetId}`);
        const countTodoData = this.countTodoData;
        let contents = '';

        if (countTodoData && countTodoData.allTodoListCount > 0
            && countTodoData.allTodoListCount === countTodoData.completedTodoListCount) {
            contents = `총 ${countTodoData.allTodoListCount} 건 모두 완료하였습니다.`;
        } else if(countTodoData && countTodoData.allTodoListCount > 0) {
            contents = `총 ${countTodoData.allTodoListCount} 건 중 ${countTodoData.completedTodoListCount} 건 완료하였습니다.`;
        } else {
            contents = '해야할일이 없습니다.';
        }

        $todoCount.innerHTML = contents;
    };
    this.setState = (countTodoData) => {
        this.validate();
        this.countTodoData = countTodoData;
        this.render();
    };

}

export default TodoCount
