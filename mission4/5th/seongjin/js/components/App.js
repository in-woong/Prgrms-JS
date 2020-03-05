import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount.js";
import Loading from "./Loading.js";
import { $ } from "../util/index.js";
import { checkError } from "../validation/index.js";
import { REMOVE_ALL } from "../constants/index.js";
import {
  getUsersTodoApi,
  getTodoApi,
  addTodoApi,
  removeTodoApi,
  toggleTodoApi
} from "../api/index.js";
import TodoUsers from "./TodoUsers.js";
import { SELECTOR, SEONGJIN } from "../constants/index.js";

export default function App() {
  this.$removeallBtn = $(SELECTOR.REMOVEALL_BUTTON);
  this.$todoList = $(SELECTOR.TODO_LIST);
  this.$inputWrapper = $(SELECTOR.INPUT_WRAPPER);
  this.$usersWrapper = $(SELECTOR.USERS_WRAPPER);
  this.todos = [];
  this.users = [];
  this.username = SEONGJIN;
  this.isLoading = false;

  this.init = () => {
    this.todoList = new TodoList(
      this.todos,
      this.onDeleteClick,
      this.onToggleClick
    );
    this.loading = new Loading(this.isLoading);
    this.todoInput = new TodoInput(this.onAddClick);
    this.todoCount = new TodoCount(this.getTotalCount, this.getCompletedCount);
    this.todoUsers = new TodoUsers(this.users, this.getfetchData);

    this.setLoadingbeforeData();
    this.getfetchData();
    this.getfetchUsersData();
  };

  this.onAddClick = async newTodo => {
    checkError.isMe(this.username);
    await addTodoApi(this.username, newTodo);
    await this.getfetchData();
  };

  this.onToggleClick = async _id => {
    checkError.isMe(this.username);
    await toggleTodoApi(this.username, _id);
    await this.getfetchData();
  };

  this.onDeleteClick = async _id => {
    checkError.isMe(this.username);
    await removeTodoApi(this.username, _id);
    await this.getfetchData();
  };

  this.getTotalCount = () => {
    return this.todos.length;
  };

  this.getCompletedCount = () => {
    return this.todos.filter(todo => todo.isCompleted).length;
  };

  this.removeAllTodo = () => {
    this.todos = [];
    this.render();
  };

  this.$todoList.addEventListener(REMOVE_ALL, this.removeAllTodo);

  this.$removeallBtn.addEventListener("click", () => {
    const removeAllevent = new CustomEvent(REMOVE_ALL);
    this.todoList.$target.dispatchEvent(removeAllevent);
  });

  this.getfetchData = async nextUsername => {
    this.username = nextUsername;
    if (this.username === undefined) {
      this.username = SEONGJIN;
    }
    this.todos = await getTodoApi(this.username);
    this.render();
  };

  this.setLoadingbeforeData = async () => {
    this.$inputWrapper.style.display = "none";
    this.$usersWrapper.style.display = "none";
    this.loading.setState(true);
    this.todos = await getTodoApi(this.username);
    this.$inputWrapper.style.display = "block";
    this.$usersWrapper.style.display = "block";
    this.loading.setState(false);
  };

  this.getfetchUsersData = async () => {
    this.users = await getUsersTodoApi();
    this.todoUsers.setState(this.users);
  };

  this.render = async () => {
    this.todoList.setState(this.todos);
    this.todoCount.setState(this.todos);
  };

  this.init();
}
