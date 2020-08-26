function TodoCount(data,elementId){
    this.data = data;
    this.elementId = elementId;
    this.setState=(nextData)=>{
        this.data = nextData;
        this.render();
    }
    this.render=()=>{
        elementId.innerHTML = `<div>
                total:${this.data.length}
                complete:${this.data.filter(e=>e.isCompleted).length}
            </div>`
    }
    this.render();
}