function fetchApi({timer, inputName, setResultState, setHistoryState}){
    
    inputName = inputName.trim();  // 앞뒤 공백 제거
    
    // 디바운싱 구현
    if (timer) clearTimeout(timer);
    
    timer = setTimeout(async () => {
        const response = await fetch(`https://jjalbot.com/api/jjals?text=${inputName}`);
        const fetchResult = await response.json();
        const resultGIF = await fetchResult;

        if (resultGIF.length !== 0){
            setResultState(resultGIF);
            setHistoryState(inputName, resultGIF);
        } 
        
    }, 1000);

    return timer;
} 

export {fetchApi};

