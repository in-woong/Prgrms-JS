const data_list = [
    do_data = [
        {text: 'JS 공부하기',
        isComplete : 'false'},
        {text: 'JS 복습하기',
        isComplete : 'true'}
    ],

    coding_data = [
        {text : '프로그래머스 코딩',
        isComplete : 'true'},
        {text : '프로젝트 코딩',
        isComplete : 'true'}
    ],

    buy_data = [
        {text : '마우스',
        isComplete : 'false'},
        {text : '모니터',
        isComplete : 'true'}
    ] 
];

const select = () =>{
    const sel_option = document.querySelector('#choice');
    const selected_value = sel_option.options[sel_option.selectedIndex].value;
    return selected_value;
}

const $input_todo = document.querySelector('#input_todo');
$input_todo.addEventListener('keydown', (e)=>{
    if(e.keyCode === 13){
        const selected_value = select();
        if(selected_value === 'todo-list'){
            do_data.push({text: $input_todo.value});
            todoList.setState(do_data);
        } else if(selected_value === "coding-list") {
            coding_data.push({text: $input_todo.value});
            codingList.setState(coding_data);
        } else {
            buy_data.push({text : $input_todo.value});
            buyList.setState(buy_data);
        }
        $input_todo.value = "";
    }
})

const todoList = new TodoList(do_data, 'todo-list');
todoList.setState(do_data);

const codingList = new TodoList(coding_data, 'coding-list');
codingList.setState(coding_data);

const buyList = new TodoList(buy_data, 'buy-list');
buyList.setState(buy_data);
