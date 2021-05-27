export const $ = (ele, dom = document) => dom.querySelector(ele);

export const ISNOTNEW = "new 키워드로 생성된 인스턴스가 아닙니다.";
export const DATAISNOTARY = "데이터의 형태가 배열이 아닙니다.";
export const VALISNOTOBJ = "데이터의 값 중 객체가 아닌 값이 있습니다.";
export const TEXTUNDEFINED = "데이터의 text들 중 적합하지 않은 값이 있습니다.";

const isOnlySpace = (str) => {
    for (let c of str){
        if (c != ' ')
            return (false)
    }
    return (true);
}  

export const isAvilable = (str) => {
    if (str == undefined || isOnlySpace(str) || typeof str !== 'string')
        return (true);
    else
        return (false);
}

