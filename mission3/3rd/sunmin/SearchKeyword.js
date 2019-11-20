import { debounce, alertErrorMsg } from './util.js';
export default class SearchKeyword {
    constructor({ elementId, target, fetchImgData }) {
        const $input = document.createElement('input');
        $input.className = target;
        $input.addEventListener('keyup', async e => {
            // 동기 코드용 trycatch
            try {
                const keyword = e.target.value;
                await debounce( fetchImgData.bind(null, keyword), 500 );
            } catch ( err ) {
                console.log(err)
                alertErrorMsg( err );
            }
            
        });
        document.querySelector( `${ elementId }` ).append( $input );
    }
}