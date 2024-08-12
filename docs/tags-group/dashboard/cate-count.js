module.exports = {
    get: {
        tags: ["Dashboard"],
        description: "Get Category count",
        operationId: "getCategoryCount",
        security: [{
            bearerAuth: []
        }],
        parameters: [],
        responses: {
            200: {
                description: "Category count got Successfully"
            },
            500: {
                description: "Internal Server Error"
            }
        }
    }
}