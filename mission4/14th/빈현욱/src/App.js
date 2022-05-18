import TodoCount from './component/TodoCount.js';
import TodoInput from './component/TodoInput.js';
import TodoList from './component/TodoList.js';
import { getTodoList, getUserList, insertTodo, deleteTodo, deleteAllTodo, updateToggle} from './api.js';
import Users from './component/Users.js';
import Loading from './component/Loading.js';

export default function App({ $app }) {
  this.state = [];
  this.stateUsers = {
      usersList: [],
      userCurrent: 'binhyunwook'
    };

  const init = async () => {
    this.stateUsers.usersList = await getUserList();
    this.state = await getTodoList(this.stateUsers.userCurrent);

    this.users = new Users({
        $app,
        initialState: this.stateUsers,
        onClick: async (value) => {
          this.stateUsers.userCurrent = value;
            this.listLoad(); //목록 불러오기
        }
    });

    this.todoList = new TodoList({
      $app,
      initialState: this.state,
      isCompleted: false,
      onChange: async (id) => {
        await updateToggle(this.stateUsers.userCurrent, id);
        this.listLoad(); //목록 불러오기
      },
      onDelete: async (id) => {
        await deleteTodo(this.stateUsers.userCurrent, id);
        this.listLoad(); //목록 불러오기
      },
    });
    
    this.todoCompletedList = new TodoList({
      $app,
      initialState: this.state,
      isCompleted: true,
      onChange: async (id) => {
        await updateToggle(this.stateUsers.userCurrent, id);
        this.listLoad(); //목록 불러오기
      },
      onDelete: async (id) => {
        await deleteTodo(this.stateUsers.userCurrent, id);
        this.listLoad(); //목록 불러오기
      },
    });

    this.todoCount = new TodoCount({
      $app,
      initialState: this.state,
    });

    this.todoInput = new TodoInput({
      $app,
      onClick: async (value) => {
        //데이터 추가
        await insertTodo(this.stateUsers.userCurrent, value);
        this.listLoad(); //목록 불러오기
      },
      onRemoveAll: async () => {
        await deleteAllTodo(this.stateUsers.userCurrent);
        this.listLoad(); //목록 불러오기
      },
    });

    this.loading = new Loading({
        $app,
        initialState: false
    });
  };

  
  this.setState = (nextState) => {
    this.state = nextState;
    this.todoList.setState(this.state);
    this.todoCompletedList.setState(this.state);
    this.todoCount.setState(this.state);
    this.users.setState(this.stateUsers);
  };

  this.listLoad = async () => {
    this.loading.setState(true);
      try{
        const list = await getTodoList(this.stateUsers.userCurrent);
        this.setState(list);
      }catch(error){
        console.log(error);
      }finally{
        this.loading.setState(false);
      }
  }

  init();
}
