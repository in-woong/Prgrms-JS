import { $, TEXTUNDEFINED, DATAISNOTARY, VALISNOTOBJ, ISNOTNEW,
    isAvilable} from "./utils.js"

export function TodoList(data, id = "#todo-list") {
    if (!(this instanceof TodoList))
        throw new Error(ISNOTNEW);

    const $List = $(`${id}>ul`);
    this.state = data;

    this.check = (data) => {
        if (!Array.isArray(data))
            throw new Error(DATAISNOTARY)
        data.forEach((val) => {
            if (val.constructor !== Object)
                throw new Error(VALISNOTOBJ)
            if (isAvilable(val.text))
                throw new Error(TEXTUNDEFINED)
        })
    }

    this.render = () => {
        if ($List.innerHTML !== null)
            $List.innerHTML = "";
        this.state.forEach((val) => {
            let str;
            if (val.isCompleted)
                str = `<li><s>${val.text}</s></li>`;
            else
                str = `<li>${val.text}</li>`;
            $List.insertAdjacentHTML("beforeend", str);
        })
    }

    this.setState = (newData) => {
        $List.innerHTML = "";
        this.state = newData;
        this.render();
    }

    this.check(this.state);
}




