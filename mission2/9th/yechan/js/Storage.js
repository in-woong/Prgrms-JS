const getItem = (key,defaultValue) =>{
    try{
        const getItem = window.localStorage.getItem(key)
        return getItem ? JSON.parse(getItem): []
    }catch(event){
        console.log(event.message)
    }
}
const setItem = (key,nextState)=>{
    try{
        localStorage.setItem(key,JSON.stringify(nextState))
    }catch(event){
        console.log(event.message)
    }
}
const removeItem = function(key){
    try{
        localStorage.removeItem(key)
    }catch(event){
        console.log(event.message)
    }
}


export {setItem, getItem, removeItem}


