export const checkTypes = (data) => {
	
	if (!Array.isArray(data)) throw new Error("data가 올바른 형식이 아닙니다.");
	
	data.forEach((element) => {
		if(!element.hasOwnProperty('text') || !element.hasOwnProperty('isCompleted')) 
			throw new Error('data의 key가 유효하지 않습니다.');
	});
}
