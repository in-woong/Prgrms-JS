import { getItem, setItem } from './localStorage.js';

import TodoCount from './TodoCount.js';
import TodoPanel from "./TodoPanel.js";
import TodoList from "./TodoList.js";

export default function App($element) {
  this.$element = $element;
  this.state = {
    text: '',
    tasks: getItem('tasks') || [],
  }

  this.setState = function(newState) {
    this.state = { ...this.state, ...newState };

    this.render();
  }

  this.handleInputChangeText = (text) => {
    this.setState({ text });
  }

  this.handleClickAddTask = () => {
    if(!this.state.text.trim()) {
      return;
    }

    const newTasks = [
      ...this.state.tasks,
      {
        id: Math.max(0, ...this.state.tasks.map(task => task.id)) + 1,
        text: this.state.text,
        isCompleted: false,
      }
    ];

    this.setState({
      text: '',
      tasks: newTasks
    });

    setItem({ key: 'tasks', value: newTasks });
  }

  this.handleClickDeleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);

    this.setState({ tasks: newTasks });

    setItem({ key: 'tasks', value: newTasks });
  }

  this.handleClickToggleCompleted = (id) => {
    const newTasks = this.state.tasks.map((task) => 
      task.id === id ? {...task, isCompleted: !task.isCompleted } : task
    )

    this.setState({ tasks: newTasks });

    setItem({ key: 'tasks', value: newTasks });
  }

  this.bindEvent = function() {
    document.addEventListener('@removeAll', () => {
      const newTasks = [];

      this.setState({ tasks: newTasks });

      setItem({ key: 'tasks', value: newTasks });

      this.handleClickCompletedTaskCount();
    })
  }

  this.render = function() {
    this.$element.innerHTML = `
      <div class="count"></div>
      <div class="panel"></div>
      <ul class="tasks"></ul>
    `

    new TodoCount({
      $element: document.querySelector('.count'),
      props: {
        allTaskCount: this.state.tasks.length,
        completedTaskCount: this.state.tasks.reduce(
          (acc, current) => current.isCompleted ? acc + 1 : acc, 0
        )
      }
    });

    new TodoPanel({
      $element: document.querySelector('.panel'),
      props: {
        text: this.state.text,
        onInputChangeText: this.handleInputChangeText,
        onClickAddTask: this.handleClickAddTask,
      }
    });

    new TodoList({
      $element: document.querySelector('.tasks'),
      props: {
        tasks: this.state.tasks,
        onClickDeleteTask: this.handleClickDeleteTask,
        onClickToggleCompleted: this.handleClickToggleCompleted,
      }
    });
  }

  this.render();
  this.bindEvent();
}
