module.exports = {
    get: {
        tags: ["User"],
        description: "Check Token",
        operationId: "checkToken",
        security: [{
            bearerAuth: []
        }],
        parameters: [],
        responses: {
            200: {
                description: "Token Valid",
            },
            401: {
                description: "UnAuthorized"
            }
        }
    }
}