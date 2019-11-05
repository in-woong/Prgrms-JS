class TodoCount{
    constructor({ elementId }) {
        // element 세팅
        const $app = document.querySelector( elementId );
        const $countBox = document.createElement( "div" );
        $app.append( $countBox );
        this.targetElement = $countBox;
        // todoList setData 함수 넣어놓음
        this.checkData = data => {
            const total = data.length;
            const completedList = data.reduce( ( result, list ) => {
                if ( list.isCompleted ) {
                    result += 1;
                }
                return result;
            }, 0 );
            return { total, completedList };
        }
    }
    render( data ) {
        const { total, completedList } = this.checkData( data );
        this.targetElement.innerHTML = (`${ completedList } // ${ total }`);
    }
}