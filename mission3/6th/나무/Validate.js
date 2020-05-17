function ValidateTarget($target) {
    if (!($target instanceof HTMLElement)) {
        throw new Error('Wrong Instance')
    }
}

function ValidateString(str) {
    if (str !== typeof stringValue) {
        console.log('Should be Type of String value')
    }
}

function ValidateData(data) {
    if (!data) {
        console.log('Invalid data')
    }
}
