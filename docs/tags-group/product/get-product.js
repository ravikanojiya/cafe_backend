module.exports = {
    get: {
        tags: ["Product"],
        description: "Get Product",
        operationId: "getProduct",
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
                description: "Product Got Successfully"
            },
            500: {
                description: "Internal Server Error"
            }
        }
    }
}