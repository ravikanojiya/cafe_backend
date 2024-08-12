module.exports = {
    patch: {
        tags: ["Product"],
        description: "Update Product",
        operationId: "updateProduct",
        security: [{
            bearerAuth: []
        }],
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UpdateProductInput"
                    }
                }
            }
        },
        responses: {
            200: {
                description: "Product Updated Successfully"
            },
            500: {
                description: "Internal Server Error"
            }
        }
    }
}