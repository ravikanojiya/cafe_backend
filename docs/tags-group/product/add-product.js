module.exports = {
    post: {
        tags: ["Product"],
        description: "Add Product",
        operationId: "addProduct",
        security: [{
            bearerAuth: []
        }],
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ProductInput"
                    }
                }
            }
        },
        responses: {
            200: {
                description: "Product added Successfully"
            },
            500: {
                description: "Internal Server Error"
            }
        }
    }
}