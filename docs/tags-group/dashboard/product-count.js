module.exports = {
    get: {
        tags: ["Dashboard"],
        description: "Get Product count",
        operationId: "getProductCount",
        security: [{
            bearerAuth: []
        }],
        parameters: [],
        responses: {
            200: {
                description: "Product count got Successfully"
            },
            500: {
                description: "Internal Server Error"
            }
        }
    }
}