import TodoInput from './Component/todoInput.js';
import TodoList from './Component/todoList.js';
import TodoCount from './Component/todoCount.js';
import TodoUsers from './Component/todoUsers.js';

import { 
    getApi,
    insertApi, 
    deleteApi, 
    toggleApi, 
    removeAllApi,
    getUsersApi, 
} from './utils/fetchApi.js';

function App({ $target }){
    this.$target = $target;
    this.state = {
        dataList : [],
    };

    // 모두 삭제 버튼 생성 함수
    this.makeRemoveAllBtn = () => {
        const removeAllBtn = document.querySelector("button");

        removeAllBtn.setAttribute("type", "button");
        removeAllBtn.setAttribute("class", "removeAll-btn");
        
        removeAllBtn.textContent = "모두 삭제"
        
        this.$target.appendChild(removeAllBtn);
    } 

    // 삭제 버튼 이벤트 함수 
    this.removeAllClickEvent = () => {
        const $removeAllBtn = document.querySelector(".removeAll-btn");

        $removeAllBtn.addEventListener("click", (e) => {
            this.removeAllTodo();
        })
    }

    // 페이지 재렌더링 함수
    this.setTodoState = (newState) => {
        this.todoList.setState(newState);
        this.todoCount.setState(newState);
    }

    // api에 가져와 페이지 재렌더링하는 함수
    this.showApiTodo = async () => {
        const apiDataList = await getApi("junseung");

        this.setTodoState(apiDataList);
    }

    // 추가 함수
    this.addTodo = async ($input) => {
        if (!$input.value) throw "데이터를 입력하세요";
        
        // 서버에 데이터 추가 
        await insertApi({
            param : {
                method: "POST",
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    content : $input.value,
                })
            }
        })
        // 데이터 로드하기 
        this.showApiTodo();
    }   

    // 삭제 함수
    this.deleteTodo = async (_id) => {
        await deleteApi({ id : _id, param : { method: "DELETE" }})
        // 데이터 로드하기
        this.showApiTodo();
    }

    // 밑줄 긋기 함수
    this.underLineTodo = async (_id) => {
        await toggleApi({ id : _id, param : { method : "PUT" }})
        // 데이터 로드하기
        this.showApiTodo();
    }

    // 모두 삭제 함수
    this.removeAllTodo = async () => {
        await removeAllApi({ param : { method : "DELETE" } })
        // 데이터 로드 하기
        this.showApiTodo();
    }

    // ../users항목 얻는 함수 
    this.getUsersTodo = async () => {
        const usersDataArray = await getUsersApi();
        
        this.todoUsers.setState(usersDataArray);
    } 

    // todoInput 컴포넌트 
    this.todoInput = new TodoInput({ $target: this.$target, addTodo: this.addTodo })

    // todoList 컴포넌트
    this.todoList = new TodoList({
        $target: this.$target,
        showApiTodo : this.showApiTodo,
        deleteTodo: this.deleteTodo, 
        underLineTodo: this.underLineTodo,
    })

    // todoCount 컴포넌트
    this.todoCount = new TodoCount({ $target: this.$target })

    // todoUser 컴포넌트
    this.todoUsers = new TodoUsers({ 
        $target: document.querySelector("#users"),
        getUsersTodo : this.getUsersTodo,

    })
    // 전체 삭제 및 버튼 이벤트 실행
    this.makeRemoveAllBtn();
    this.removeAllClickEvent();
}


export default App;

