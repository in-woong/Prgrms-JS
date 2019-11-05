import { data, todoCount, todoListTop } from './App.js'
import { todoList} from './TodoInput.js'

// 삭제버튼 클릭했을때 해당 할일이 삭제됨
const todoDelText = function () {
    todoListTop.addEventListener('click', function (event) {
        if (event.target.nodeName === "BUTTON") {
            let i = Number(event.target.id.substr(15))
            data.splice(i, 1);
            todoList.setState(data);
            todoCount.setState(data);
            // todoChangeText();
            // todoDelText();
        }

    })
}

export { data, todoDelText };
