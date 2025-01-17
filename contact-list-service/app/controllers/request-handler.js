export const setResponse = (data, response) => {
    response.status(200);
    response.json(data);
}

export const setError = () => (data, response) => {
    response.status(500);
    response.json({
        error: {
            code: 'InternalServerError',
            message: 'Error is to be shown based on the error code from here. For now: Error has occurred'
        }
    });
}