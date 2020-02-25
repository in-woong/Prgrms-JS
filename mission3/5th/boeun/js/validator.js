const validateElement = $element => {
    if (!($element instanceof HTMLElement)) {
        throw new Error('정상적인 HTML Element가 아닙니다.');
    }    
}

const validateEmptyInput = data => {
    if( data == null || data.trim().length === 0) {  
        return true
    }
    return false
}

const validateApiResponse = response => {
    if (!response.ok) {
        throw new Error(ERROR_MESSAGE.API_ERROR)
    }    
}

export { validateElement, validateEmptyInput, validateApiResponse } 
