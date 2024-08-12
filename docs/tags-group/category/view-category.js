module.exports = {
    get: {
        tags: ["Category"],
        description: "Get All Categories",
        operationId: "getAllCategories",
        security: [{
            bearerAuth: []
        }],
        parameters: [],
        responses: {
            200: {
                description: "All Category got Successfully"
            },
            500: {
                description: "Internal Server Error"
            }
        }
    }
}