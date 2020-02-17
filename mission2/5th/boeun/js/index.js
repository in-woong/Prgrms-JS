
let data = [];
try {
    data = JSON.parse(localStorage.getItem('todoList')) || [];
    console.log(data);
} catch(e) {
    console.error('데이터를 정상적으로 파싱하지 못했습니다.');
}

new App('todo-list', data);
// new App('student-do-list', data2 , 'student-list');
