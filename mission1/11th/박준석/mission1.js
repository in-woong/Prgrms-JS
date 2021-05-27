import { $, TEXTUNDEFINED, DATAISNOTARY, VALISNOTOBJ, ISNOTNEW,
    isAvilable} from "./utils.js"

const data = [
    {
        text: 'JS 공부하기',
        isCompleted: false
    },
    {
        text: 'JS 복습하기',
        isCompleted: false
    },
    {
        text : "                   d    ",
        isCompleted: true
    }
]

const data2 = [
    {
        text: '게임하기',
        isCompleted: true
    },
    {
        text: '축구하기',
        isCompleted: false
    },
    {
        text : "독서하기",
        isCompleted: true
    }
]

const data3 = [
    {
        text: '밥',
        isCompleted: false
    },
    {
        text: '라면',
        isCompleted: true
    },
    {
        text : "치킨",
        isCompleted: false
    }
]

export function TodoList(data, id) {
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
        this.state.forEach((val) => {
            let str;
            console.log(val.isCompleted);
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

    this.check(data);
}




