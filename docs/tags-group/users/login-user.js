module.exports = {
    post: {
        tags: ["User"],
        description: "Login User",
        operationId: "loginUser",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/LoginInput"
                    }
                }
            }
        },
        responses: {
            200: {
                description: "User Login Success",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/LoginResponse"
                        }
                    }
                }
            },
            401: {
                description: "User Not Authorized",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Error"
                        }
                    }
                }
            }
        }
    }
}