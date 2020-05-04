function TodoCount(data){
    this.data = data;
    
    this.render = function(data){
        this.data = data;
        this.total = 0;
        this.completed = 0;
        try{
            this.data.map(
                (d) => {
                    if(d.isCompleted){
                        this.completed += 1
                    }
                }
            )
            document.getElementById('totalNum').innerHTML = `총 갯수 : ${this.data.length}`;
            document.getElementById('completeNum').innerHTML = `완료한 갯수 : ${this.completed}`;
        }
        catch(e){

        }
    }

    this.setStatus = function(data){
        this.data = data;
        this.render(this.data);
    }

}