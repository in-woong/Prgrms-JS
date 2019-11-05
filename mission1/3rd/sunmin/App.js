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


// 인스턴스 생성 및 파라미터 밸리데이션
const validate = ( context, data ) => {
    // new로 안부르면 에러
    if ( context === window ) {
        throw new Error( 'invalid access' );
    }
    // 배열이 아니거나, 비어있거나, text 프로퍼티 없으면 에러
    if ( !Array.isArray( data ) || !data.length || data.some( ele => !ele.text ) ) {
        throw new Error( 'invalid format of parameter' );
    }
}

// localStorage setting
const setLocalStorageListData = ( data ) => {
    localStorage.setItem( 'todolistData', JSON.stringify( data ) );
}
const getLocalStorageListData = ( data ) => {
    const savedData = localStorage.getItem('todolistData');
    return savedData ? JSON.parse( savedData ) : data;
}

// 데이터 관리는 App 컴포넌트에서만 신경쓴다 (벨리데이션, 추가 변경 함수 모두)
class App {
    constructor({ data, elementId }) {
        validate( this, data );
        this.data = getLocalStorageListData( data );
        this.elementId = ( elementId && typeof elementId === 'string' && `#${ elementId }` ) || '#app';
        // 데이터 상태값 변경하는 함수
        this.setState = ( action, dataIndex ) => {
            if ( action === ACTION.completeChange.key ) {
                this.data[ dataIndex ].isCompleted = !this.data[ dataIndex ].isCompleted;
            } else if ( action === ACTION.delete.key ) {
                this.data.splice( [ dataIndex ], 1 );
            }
            setLocalStorageListData( this.data );
            this.render();
        }
        // 데이터 추가하는 함수
        this.addState = ( newData ) => {
            if ( !newData.text ) {
                throw new Error( 'invalid data' );
            }
            this.data.push( newData );
            setLocalStorageListData( this.data );
            this.render();
        }
        // 하위 컴포넌트는 받아온 함수에 인자만 넣어서 상태를 바꿔준다.
        this.todoList = new TodoList({ data: this.data, elementId: this.elementId, setData: this.setState });
        this.todoInput = new TodoInput({ elementId: this.elementId, addData: this.addState });
        this.todoCount = new TodoCount({ data: this.data, elementId: this.elementId });
    }
    render() {
        this.todoList.render( this.data );
        this.todoInput.render( this.data );
        this.todoCount.render( this.data );
    }
}