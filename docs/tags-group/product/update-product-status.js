module.exports = {
    patch: {
        tags: ["Product"],
        description: "Update Product Status",
        operationId: "updateProductStatus",
        security: [{
            bearerAuth: []
        }],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UpdateProductStatusInput"
                    }
                }
            }
        },
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