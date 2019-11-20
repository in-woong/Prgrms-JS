// mongo 고유 아이디 생성
export const makeObjectId = () => {
    const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
}

// 인스턴스 생성 및 파라미터 밸리데이션
export const validate = ( context, data ) => {
    // new로 안부르면 에러
    if ( context === window ) {
        throw new Error( 'invalid access' );
    }
}
