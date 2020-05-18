function validateTarget($target) {
    if (!($target instanceof HTMLElement)) {
        throw new Error('Wrong Instance')
    }
}

function validateString(str) {
    if (str !== typeof String) {
        console.log('Should be Type of String')
    }
}

function validateData(data) {
    if (!data) {
        console.log('Invalid data')
    }
}
