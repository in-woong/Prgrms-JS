import { checkTypes } from '../utils/validateData.js'

const addtodo_btn = document.querySelector("#todo-btn");

export default function TodoInput(appAddData) {

	this.addTodo = () => {
		const inputData = document.querySelector("#newData");
		if(inputData.value.length === 0) {
			alert('데이터가 없습니다.');
		}else{
      		appAddData(inputData.value);
		}	

		inputData.value = "";
  };
	
	addtodo_btn.addEventListener('click', this.addTodo);
}
