// TodoList 라는 이름을 가진 함수를 작성합니다.
// 해당 함수는 new 키워드를 이용해 생성되며, 파라메터로 위의 data를 넘겨받습니다. ex) var todoList = new TodoList(data);
// TodoList 함수는 파라메터로 넘겨받은 data를 this 키워드를 이용해 함수 내 변수로 저장해둡니다. this.data = data 이런 식으로요.
// this.render = function{ ... } 형태로 TodoList 함수 내에 render function을 작성합니다.
// 이 함수는 data를 이용해 data 배열을 순회하며 각 배열첨자의 text를 html로 만든 뒤, todo-list라는 id를 가진 div에 data의 text가 렌더링되도록 작성합니다. 아래 Tip을 참고하세요.
// 위에서 작성한 TodoList 함수를 var todoList = new TodoList(data); 형태로 생성한 후, todoList.render() 함수를 호출하여 실행되게 작성합니다.

// Bonus(필수는 아니지만 해보면 좋을 것들)
// new 키워드로 함수의 인스턴스를 만들 때 올바른 파라메터가 넘어오지 않을 경우 에러 발생하게 하기
// new 키워드 안 붙이고 함수 실행 시 에러 발생하게 하기

//Think for bonus.(의식의 흐름)
//1. 올바른 파라메터란 과연 무엇일까?? render 함수를 정상적으로 동작하기 위한 파라메터로 가정.
//2. 에러를 발생해야 되는 시점은 render 함수를 실행했을때 조건문을 통해 검사 해보자.
//3. new 키워드를 안붙이면 에러가 그냥 발생하지 않나?? 아니 에초에 왜 에러가 발생한다고 생각을 했을까?
//4. this 대상이 만약 window 라면 new 키워드를 붙이라고 return 시키기 (프로퍼티체인이었나?) 
//5. 혹은 typeof 를 통해 function이라면 new 키워드를 붙여달라고 할수도 있는 거 같다.
//6. 각각 나중에 문제가 생길수 있는 요인들은 뭘까?

function TodoList(data) {
    if (this == window) {
        throw new Error("new 키워드를 붙혀주세요")
    } else {
        var todoList = document.querySelector("#todo-list");
        this.data = data;
        this.render = function() {
            this.data.forEach((e) => {
                if (typeof(e.text) !== "string" || !Array.isArray(this.data)) {
                    throw new Error("올바른 파라메터를 입력해주세요");
                } else {
                    todoList.innerHTML = e.text;
                }
            })
            
            // var check = this.data;
            // for (let i = 0; i < check.length; i++) {
            //     if (typeof(check[i].text) !== "string" || !Array.isArray(check)) {
            //         return console.log("올바른 파라메터를 입력해주세요");
            //     } else {
            //         todoList.innerHTML = check[i].text;
            //     }
            // }
        }

        this.setState = function(data) {
            this.data = data;
            todoList.innerHTML = this.data.text;
        } 
    }
    
}

var data = [
    {
        text: "JS 공부하기"
    },
    {
        text: 'JS 복습하기'
    }
]

var todoList = new TodoList(data);

todoList.render();
todoList.setState({
    text: "JS 변경하기"
})