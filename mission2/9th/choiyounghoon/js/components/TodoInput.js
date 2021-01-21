import {ERROR_MESSAGE} from "./ErrorMessage.js";

export function TodoInput({target,onEnter,removeAll}){
    if(!new.target) throw new Error(ERROR_MESSAGE.CANT_NEW);
    this.$target = target;
    this.$todoInput = document.createElement("input");
    this.$todoInput.placeholder = "할 일을 입력하세요";
    this.$todoBtn = document.createElement("button");
    this.$todoBtn.innerText = "입력";
    this.$todoDeleteBtn = document.createElement("button");
    this.$todoDeleteBtn.innerText = "모두삭제";

    this.$todoDeleteBtn.addEventListener("click", (e) => {
        removeAll(e);
    })
    this.$todoInput.addEventListener("keyup",(e) => {
        if(e.keyCode === 13){
            onEnter(e.target.value);
        }
    })
    this.$todoBtn.addEventListener("click",(e) => {
        onEnter(this.$todoInput.value);
    })

    this.$target.appendChild(this.$todoInput);
    this.$target.appendChild(this.$todoBtn);
    this.$target.appendChild(this.$todoDeleteBtn);



    this.render = () => {
        this.$todoInput.value = "";
    }
    this.setState = (nextData) => {
        this.data = nextData;
        this.render();
    }
}