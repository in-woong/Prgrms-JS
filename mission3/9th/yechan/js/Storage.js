const getItem = (key) =>{
    try{
        const getItem = localStorage.getItem(key)
        return getItem ? JSON.parse(getItem) : []
    }catch(event){
        console.log(event.message)
    }
}

const setItem = (key,nextData) =>{
    try{
        localStorage.setItem(key,JSON.stringify(nextData))
    }catch(event){
        console.log(event.message)
    }
}

export {setItem, getItem, }
