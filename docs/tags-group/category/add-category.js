module.exports = {
    post: {
        tags: ["Category"],
        description: "Add Category",
        operationId: "addCategory",
        security: [{
            bearerAuth: []
        }],
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/CategoryInput"
                    }
                }
            }
        },
        responses: {
            200: {
                description: "Category added Successfully"
            },
            500: {
                description: "Internal Server Error"
            }
        }
    }
}