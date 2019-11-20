export default class TodoList {
    constructor({ data, elementId, setData }) {
        this.data = data;
        // app 내부 todo-list element 세팅
        const $app = document.querySelector( elementId );
        const $listBox = document.createElement( "div" );
        $listBox.id = 'todo-list';
        $app.appendChild( $listBox );
        this.targetElement = $listBox;
        // 이벤트 델리게이션
        $listBox.addEventListener('click', e => {
            const targetDiv = e.target;
            const parentDiv = e.target.parentNode;
            const todoId = parentDiv && parentDiv.dataset.id;
            if ( targetDiv.className === 'list-text' ) {
                setData( 'completeChange', todoId );
            }
            if ( targetDiv.className === 'list-delete-btn' ) {
                setData( 'delete', todoId );
            }
        })
    }
    render( data ) {
        const innerText = data.reduce( ( result, row ) => {
        let innerHtml;
        if ( row.isCompleted ) {
            innerHtml = `<strike class='list-text'>${row.content}</strike>`;
        } else {
            innerHtml = `<span class='list-text'>${row.content}</span>`;
        }
        result.push( `
            <div data-id=${ row._id }>
                ${ innerHtml }
                <button class='list-delete-btn'>delete</button>
            </div>
        ` );
        return result;
        }, []);
        this.targetElement.innerHTML = innerText.join('');
    }
};

