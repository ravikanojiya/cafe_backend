module.exports = {
    delete: {
        tags: ["Product"],
        description: "Delete Product By Id",
        operationId: "deleteProductById",
        security: [{
            bearerAuth: []
        }],
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id"
                },
                required: true,
                description: "A single Product id"
            }
        ],
        responses: {
            200: {
                description: "Product deleted Successfully"
            },
            500: {
                description: "Internal Server Error"
            }
        }
    }
}