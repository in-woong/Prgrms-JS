export function isValidData(data){
    try{
        if((data === undefined) || (data === null)){
            throw new Error("Given data is undefined/null data");
        }
        if(!Array.isArray(data)){
            throw new Error("Given data is not array");
        }
        if(!data.every((item) => (typeof item.content === 'string') && (typeof item.isCompleted === 'boolean'))){
            throw new Error("Given data's value type is incorrect");   
        }
    }   
    catch(e){
        console.error(e);
    }
}