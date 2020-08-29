class App {
	$target;
	jsTodoList;
	csTodoList;
	stTodoList;

	constructor($target) {
		this.$target = $target;

	    this.jsTodoList = new TodoList({ 
	    	$target, 
	    	initialData: {
	    		data: [
			        {
			            text: 'JS 공부하기',
			            isCompleted: true
			        },
			        {
			            text: 'JS 복습하기',
			            isCompleted: false
			        }
			    ]
	    	} 
	   	}).dom().render();

	   	this.csTodoList = new TodoList({ 
	    	$target, 
	    	initialData: {
	    		data: [
			        {
			            text: '운영체제 공부하기',
			            isCompleted: true
			        },
			        {
			            text: '운영체제 복습하기',
			            isCompleted: false
			        }
			    ]
	    	} 
	   	}).dom().render();

	   	this.stTodoList = new TodoList({ 
	    	$target, 
	    	initialData: {
	    		data: [
			        {
			            text: '자료구조 공부하기',
			            isCompleted: true
			        },
			        {
			            text: '자료구조 복습하기',
			            isCompleted: false
			        }
			    ]
	    	} 
	   	}).dom().render();
	}
}