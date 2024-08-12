module.exports = {
    patch: {
        tags: ["User"],
        description: "Update User Status",
        operationId: "updateUser",
        security: [{
            bearerAuth: []
        }],
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/UpdateUserStatus"
                    }
                }
            }
        },
        responses: {
            200: {
                description: "User Status Updated",
            },
        }
    }
}