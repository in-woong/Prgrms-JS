import main from "./main.js"
import {$} from "./utils/utils.js";

(function() {
    
    const app = new main($("app"), {
        data : [],
        username : "",
        isLoading : false,
        //FIXEDME :: todos 활용에 대한 고민 
        // todos : [{
        //     id : "",
        //     isCompleted : false,
        // }],
    });
  })()