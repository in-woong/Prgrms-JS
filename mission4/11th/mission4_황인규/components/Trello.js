import { $ } from "../utils/utils.js";
import TodoList from "./TodoList.js";

function Trello(params){
    const $target = params.$target;
    const onClick = params.onClick;
    const onRemove = params.onRemove;
    this.$data = params.data;

    const completedTodo = new TodoList({
       $target : $(".user-trello-completed"),
       data : this.$data,
       onClick : onClick, 
       onRemove : onRemove
    })

    const unCompletedTodo = new TodoList({
       $target : $(".user-trello-uncompleted"),
       data : this.$data,
       onClick : onClick, 
       onRemove : onRemove
    })
    
    
    $(".user-trello").addEventListener('dragstart', (event) => {
       
        event.target.style.opacity = .5;
        event.dataTransfer.setData('id', event.target.id);
       
    })

    $(".user-trello").addEventListener('dragend', (event) => {
       
        event.target.style.opacity = "";
    })
    this.setState = (nextData) => {
    
        this.$data = nextData
        const completedData = {
            ...this.$data,
            isCompleted : true,
            data : this.$data.data.filter((todo)=>todo.isCompleted)
           //FIXEDME :: todos 활용 방법에 대한 고민
           //todos : this.$data.todos.filter((todo) => todo.isCompleted),

        
        };
        //완료 task
        completedTodo.setState(completedData);
        

        // todos : this.$state.data.map((todo)=>{
                //     if(todo.id === id){
                //         return {
                //             ...todo,
                //             isCompleted: !todo.isCompleted,
                //         }
                //     }else{
                //         if(todo.id !== id)
                //                 return todo
                //     }
                // }),


        //미완료 task
        const unCompleteData = {
            ...this.$data,
            //FIXEDME :: todos 활용 방법에 대한 고민
            //todos : this.$data.todos.filter((todo) => !todo.isCompleted),
            isCompleted : false,
            data : this.$data.data.filter((todo)=> !todo.isCompleted)
        };

        unCompletedTodo.setState(unCompleteData);
       
       
      }

}


export default Trello;