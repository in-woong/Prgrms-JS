

class TodoList {
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
            const dataIndex = parentDiv && parentDiv.dataset.index && Number( parentDiv.dataset.index );
            if ( targetDiv.className === 'list-text' && Number.isInteger( dataIndex ) ) {
                setData( 'completeChange', dataIndex );
            }
            if ( targetDiv.className === 'list-delete-btn' && Number.isInteger( dataIndex ) ) {
                setData( 'delete', dataIndex );
            }
        })
    }
    render( data ) {
        const innerText = data.reduce( ( result, row, index ) => {
        let innerHtml;
        if ( row.isCompleted ) {
            innerHtml = `<strike class='list-text'>${row.text}</strike>`;
        } else {
            innerHtml = `<span class='list-text'>${row.text}</span>`;
        }
        result.push( `
            <div data-index=${ index }>
                ${ innerHtml }
                <button class='list-delete-btn'>delete</button>
            </div>
        ` );
        return result;
        }, []);
        this.targetElement.innerHTML = innerText.join('');
    }
};

