import { data } from "../data.js"

const $todoList = document.querySelector("#todo-list");

function TodoList(data) {
    // 생성자함수가 new 연산자와 함께 호출되었는지 확인
    // 만약 new 연산자와 호출되지 않았다면 new를 붙여서 호출하도록 처리
    if (!new.target){
      return new TodoList(data)
    } else {
        this.data = data;
        this.render = function () {
            const $number = document.createElement("div");
            $number.setAttribute("class", "list-number")
            $number.innerText = "1"
            $todoList.appendChild($number) 
            // 만약 인자가 배열이라면
            if (Array.isArray(data)) {
                // 만약 빈 배열이 아니라면
                if(data.length) {
                    const $list = document.createElement("ul");
                    $list.setAttribute("class", "items")
                    data.forEach((el) => {
                    // 만약 배열의 요소가 key값으로 text를 갖는다면,
                    if(Object.keys(el).includes("text") && Object.keys(el).includes("isCompleted")){
                        // 이미 한 목록이라면,
                        if (el.isCompleted) {
                            const $item = document.createElement("li")
                            const $strong = document.createElement("s");
                            const $text = document.createTextNode(el.text);
                            $strong.appendChild($text);
                            $item.append($strong)
                            $list.appendChild($item)
                        } else {
                            // 해야할 목록이라면,
                            const $item = document.createElement("li")
                            const $text = document.createTextNode(el.text);                            
                            $item.appendChild($text);       
                            $list.appendChild($item)
                        }                       
                        $todoList.appendChild($list)
                    } else if(!Object.keys(el).includes("text")) {
                        // 배열의 요소가 key값으로 text를 갖지 않는다면,
                        throw new Error("데이터 요소의 key값으로 text가 존재하지 않습니다")
                    } else if(!Object.keys(el).includes("isCompleted")) {
                        // 배열의 요소가 key값으로 isCompleted를 갖지 않는다면,
                        throw new Error("데이터 요소의 key값으로 isCompleted가 존재하지 않습니다")
                    } 
                })
            } else {
                // 주어진 인자가 배열이 아니라면
                throw new Error("빈 배열입니다")
            }
        } else {
            // 만약 data가 null, undefined 등 falsy한 값이라면,
            if (!data) {
                throw new Error(`데이터가 falsy한 값입니다: ${data}`)
            } else {
                throw new Error("주어진 인자는 배열이 아닙니다")
            }
        }
  };
  this.setState = function (nextData = data) {
    this.data = nextData;
    this.render();
  }
}
}

let todoList = TodoList(data);


// todoList.render()
todoList.setState();
