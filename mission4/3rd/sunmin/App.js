import TodoCount from './TodoCount.js';
import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';
import TodoLoading from './TodoLoading.js';

import { getTodoList, addTodoItem, deleteTodoItem, setTodoItemStatus } from './api.js';
import { validate, makeObjectId } from './util.js';
const ACTION = {
    completeChange: {
        key: 'completeChange',
        name: '완료 상태 변경'
    },
    delete: {
        key: 'delete',
        name: '리스트 삭제'
    },
}

// 데이터 관리는 App 컴포넌트에서만 신경쓴다 (벨리데이션, 추가 변경 함수 모두)
export default class App {
    constructor({ userName, elementId }) {
        validate( this );
        this.userName = userName;
        this.data = [];
        this.elementId = ( elementId && typeof elementId === 'string' && `#${ elementId }` ) || '#app';
        // 데이터 상태값 변경하는 함수
        this.setState = async ( action, todoId ) => {
            try {
                this.apiLoading.render( true );
                if ( action === ACTION.completeChange.key ) {
                    await setTodoItemStatus({ userName: this.userName, todoId });
                } else if ( action === ACTION.delete.key ) {
                    await deleteTodoItem({ userName: this.userName, todoId })
                }
                await this.render();
                this.apiLoading.render( false );
            } catch ( err ) {
                console.log(err);
                throw new Error( err );
            }
        }
        // 데이터 추가하는 함수
        this.addState = async ( newData ) => {
            try {
                this.apiLoading.render( true );
                if ( !newData.content ) {
                    throw new Error( 'invalid data' );
                }
                newData._id = makeObjectId();
                await addTodoItem({ userName: this.userName, item: newData });
                await this.render();
                this.apiLoading.render( false );
            } catch ( err ) {
                console.log(err);
                throw new Error( err );
            }
        }
        // 하위 컴포넌트는 받아온 함수에 인자만 넣어서 상태를 바꿔준다.
        this.todoList = new TodoList({ data: this.data, elementId: this.elementId, setData: this.setState });
        this.todoInput = new TodoInput({ elementId: this.elementId, addData: this.addState });
        this.todoCount = new TodoCount({ data: this.data, elementId: this.elementId });
        // loading component
        this.apiLoading = new TodoLoading({ elementId: this.elementId });
    }
    async render() {
        this.data = await getTodoList({ userName: this.userName }); 
        this.todoList.render( this.data );
        this.todoInput.render( this.data );
        this.todoCount.render( this.data );
    }
}