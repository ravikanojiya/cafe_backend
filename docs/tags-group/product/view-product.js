module.exports = {
    get: {
        tags: ["Product"],
        description: "Get All Products",
        operationId: "getAllProducts",
        security: [{
            bearerAuth: []
        }],
        parameters: [],
        responses: {
            200: {
                description: "All Product got Successfully"
            },
            500: {
                description: "Internal Server Error"
            }
        }
    }
}