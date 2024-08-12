module.exports = {
    post: {
        tags: ["User"],
        description: "Create User",
        operationId: "createUser",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/SignUpInput"
                    }
                }
            }
        },
        responses: {
            200: {
                description: "User Created Successfully"
            },
            500: {
                description: "Internal Server Error"
            }
        }
    }
}