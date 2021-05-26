export const addData = async(todoText) => {
    const response = await fetch('https://todo-api.roto.codes/bom', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: todoText
        })
    })
}

export const deleteData = async(dataId) => {
    const response = await fetch(`https://todo-api.roto.codes/bom/${dataId}`, {
        method: 'DELETE'
    })
}

export const toggleData = async(dataId) => {
    const response = await fetch(`https://todo-api.roto.codes/bom/${dataId}/toggle`,{
        method: 'PUT'
    })
}

export const fetchData = async () => {
    try {        
        const response = await fetch('https://todo-api.roto.codes/bom')
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

