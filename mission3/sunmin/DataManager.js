const SERVER_URL = 'https://jjalbot.com/api/jjals';

export const fetchData = async ({ keyword }) => {
    // 상위컴포넌트 캐치에서 에러 잡는다
    const data = await fetch(`${ SERVER_URL }?text=${ keyword }`);
    return data.json();
};