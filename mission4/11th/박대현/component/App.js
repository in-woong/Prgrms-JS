
import Todo from './todo/Todo.js';
import User from './user/User.js';
import Spinner from './Spinner.js';

export default function ($parent) {

  // app이 관리할 하위 컴포넌트
  const components = [];

  // app의 DOM 요소
  const elements = {
    $app : Object.assign(document.createElement('div'), {className:'app'}),
  };

  // app 포함 하위컴포넌트가 다룰 이벤트 핸들러
  const eventHandlers = {
    handleSelectUsername : keyword => {
      const [_, $, todo] = components;
      todo.setState.setUsername(keyword);
    }
  }

  // mount
  const mount = () => {
    const { $app } = elements;
    const spinner = new Spinner($app)
    components.push(spinner);
    components.push(new User($app, eventHandlers, spinner.renders)) ;
    components.push(new Todo($app));
    $parent.appendChild($app);
  }

  ///////////////////////////////////////////////////////////
  mount();
};

