function TodoList(data, elementid){

    const $do_list = document.querySelector(`#${elementid}`);
    const $do_title = document.createElement('h2');
    const $do_ul = document.createElement('ul');
    const $do_span = document.createElement('span');

    this.setState = function(nextData){
        this.data = nextData
        this.checkdata(data)
        this.render();
    }

    this.checkdata = function(data){
        //data 형식이 잘못 되었을때 아래와 같은 오류 뿜기.
        if(typeof data != 'object' || typeof data == undefined || Array.isArray(data) == false){
            throw new Error("Wrong parameter");
        }

        if(this.constructor != TodoList){
            throw new Error("Wrong Call method");
        }
    }

    this.render = function(){
        $do_list.appendChild($do_ul);
        $do_title.innerHTML = elementid;
        
        const fix_data = data.map((data)=>
        {
            console.log(data.text);
            if(data.isComplete === 'true'){
                console.log('strike추가됨');
                return `<li><strike>${data.text}</strike></li>`
            }
            else if(!data.isComplete){
                console.log('strike추가안됨');
                return `<li>${data.text}</li>`
            }
            else
                return `<li>${data.text}</li>`
        });
        $do_span.innerHTML = fix_data;
        $do_list.appendChild($do_title);
        $do_ul.appendChild($do_span);
        $do_list.appendChild($do_ul);
        }
    }