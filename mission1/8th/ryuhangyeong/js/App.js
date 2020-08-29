class App {
	$target;
	todoList;

	constructor($target) {
		this.$target = $target;

		const todos = [
	        {
	            text: 'JS 공부하기',
	            isCompleted: true
	        },
	        {
	            text: 'JS 복습하기',
	            isCompleted: false
	        }
	    ];

	    this.todoList = new TodoList({ 
	    	$target, 
	    	initialData: {
	    		todos
	    	} 
	   	}).dom().render()
	}
}