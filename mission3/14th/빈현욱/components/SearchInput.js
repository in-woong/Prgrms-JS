import { debounce } from "../utils/debounce.js";

export default function SearchInput({onKeyup}){

    this.eventer = () => {
        //키 값 변경 시 onKeyup로 보내기

        document.querySelector('#search-keyword').addEventListener('keyup', function (e) {
            //디바운싱 : 정해진 초 안에 입력 시 이벤트 실행을 안 했다가 해당 초 안에 입력을 안 하면 이벤트 실행(입력 도중에는 실행 안됨)
            //쓰로틀링 : 정해진 초 동안 입력 받은 값에 대해 이벤트 실행 (입력 도중 초가 다 되면 실행 됨)
            debounce(() => onKeyup(e.target.value), 200);
        });
    }
    this.eventer();
};
