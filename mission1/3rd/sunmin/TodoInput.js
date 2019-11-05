class TodoInput {
    constructor({ elementId, addData }) {
        // element 세팅
        const $app = document.querySelector( elementId );
        const $inputBox = document.createElement( "div" );
        $app.prepend( $inputBox );
        this.targetElement = $inputBox;
        // 리스트 추가 이벤트
        this.createNewList = () => {
            const $todoText = this.targetElement.querySelector( '.add-todo-text'); 
            const todoText = $todoText.value;
            if ( !todoText ) {
                return;
            }
            $todoText.value = '';
            const newData = { text: todoText, isCompleted: false };
            addData( newData );
            $todoText.focus();
        }
    }
    render() {
        // 앱을 여러개 찍어낸다 가정했을 때, id는 문제를 일으킴. app 내부의 클래스로 접근하자!!
        this.targetElement.innerHTML = (`
            <input class="add-todo-text" type="text" />
            <button class="add-todo-btn">ADD</button>
        `);
        this.targetElement.querySelector('.add-todo-text').focus();
        // 리스트 추가 이벤트 맵핑 ( 버튼 클릭 & 인풋창 엔터 )
        this.targetElement.querySelector( '.add-todo-btn' ).addEventListener('click', this.createNewList);
        this.targetElement.querySelector( '.add-todo-text' ).addEventListener('keyup', e => {
            const ENTER_KEY_CODE = 13
            if ( e.keyCode === ENTER_KEY_CODE ) {
                this.createNewList();
            }
        });
    }
};