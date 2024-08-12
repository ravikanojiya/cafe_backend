module.exports = {
    patch: {
        tags: ["Category"],
        description: "Update Category",
        operationId: "updateCategory",
        security: [{
            bearerAuth: []
        }],
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UpdateCategoryInput"
                    }
                }
            }
        },
        responses: {
            200: {
                description: "Category Updated Successfully"
            },
            500: {
                description: "Internal Server Error"
            }
        }
    }
}