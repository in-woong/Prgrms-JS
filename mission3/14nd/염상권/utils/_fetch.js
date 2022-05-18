const API_ROOT = `https://jjalbot.com/api/jjals?text=`;

export const _fetch = async ({ keyword }) => {

    try {
        const response = await fetch(`${API_ROOT}${keyword}`);

        if (!response.ok) {
            throw new Error('서버에서 오류가 발생했습니다.');
        }

        return await response.json();
    } catch (e) {
        console.error(e);
        return null;
    }
}
