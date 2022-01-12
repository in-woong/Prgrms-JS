export default function checkValidation(data){
    if(!data) throw new Error('data가 null 또는 undefined입니다')
    if(!Array.isArray(data)) throw new Error('data가 array가 아닙니다.')
    data.forEach(todoItem=>{
        if(!todoItem.hasOwnProperty('text') || !todoItem.hasOwnProperty('isCompleted')) throw new Error('받아온 파라미터가 잘못됬습니다.')
        if(typeof todoItem.text !== 'string' || typeof todoItem.isCompleted !== 'boolean' )  throw new Error('data의 타입이 잘못됬습니다.')
        if(!todoItem.text)throw new Error('data가 비어있습니다.')
    })
}
