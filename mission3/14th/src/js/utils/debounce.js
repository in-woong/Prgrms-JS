
export const debounce = (callbackFunc,wait=1000)=>{
    let timer;
    return (event)=>{
        clearTimeout(timer);
        timer=setTimeout(()=>{
            clearTimeout(timer);
            callbackFunc(event);
        },wait);
    }
};
