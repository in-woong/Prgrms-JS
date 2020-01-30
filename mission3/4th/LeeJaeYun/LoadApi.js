const LoadApi = {
    loadApi: function (textValue) {
        return (
            fetch("https://jjalbot.com/api/jjals?text=" + textValue)
                .then(response => response.json())
        );
    }
};