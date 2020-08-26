
// App.js 내 존재했던 부분을 TodoInput.js로 분리함에 따라 다음과 같이 추가적으로 작업한다
function TodoInput({ onAdd }) {
    document.querySelector('#todo-input').addEventListener('keydown', (e) => {
        // keyCode '13'은 Enter 키 지칭
        const ENTER_KEY_CODE = 13
        // e.keyCode, e.target에 대해 destructuring 문법 적용하여 다음에 사용 시 e 생략
        const { keyCode, target } = e
        if (keyCode === ENTER_KEY_CODE) {
            onAdd(target.value)
            /* 
            콜백함수를 활용하여TodoInput을 컴포넌트화하여 App.js 간 데이터를 주고 받는다. 동시에 컴포넌트 간 
            코드의 간섭을 제거한다
            const nextData = [...this.data, {
                text: target.value,
                isCompleted: false
            }]
            // 데이터 변경 및 입력창 내 공백 적용
            this.setState(nextData)
            */
            target.value = ''
        }
    })
}