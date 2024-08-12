module.exports = {
    get: {
        tags: ["User"],
        description: "Get All Users",
        operationId: "getAllUsers",
        security: [{
            bearerAuth: []
        }],
        parameters: [],
        responses: {
            200: {
                description: "Got All Users",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User"
                        }
                    }
                }
            },
            404: {
                description: "No users found",
                content: {
                    "application/json": {
                        $ref: "#/components/schemas/Error"
                    }
                }
            },
            401: {
                description: "Unauthorized",
                content: {
                    "application/json": {
                        $ref: "#/components/schemas/Error"
                    }
                }
            }
        }
    }
}