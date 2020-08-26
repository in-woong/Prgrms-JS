const pad = datetime => {
    return datetime < 10 ? `0${datetime}` : `${datetime}`;
}

export const formatDateTime = timedata => {
    const date = new Date(timedata);
    return `
    ${date.getFullYear()}년 ${pad(date.getMonth())}월 ${pad(date.getDate())}일 
    ${pad(date.getHours())}시 ${pad(date.getMinutes())}분
    `;
}

export const debounce = (targetFunction, debounceTime = 500) => {
    let timeoutId = null;
    return (...parameters) => {
        if(timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
           targetFunction(...parameters);
           timeoutId = null
        }, debounceTime);
   } 
}