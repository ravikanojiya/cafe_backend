module.exports = {
    get: {
        tags: ["User"],
        description: "Get a User",
        operationId: "getUser",
        parameters: [
            {
                name: "id",
                in: "path",
                schema: {
                    $ref: "#/components/schemas/id"
                },
                required: true,
                description: "A single user id"
            }
        ],
        responses: {
            200: {
                description: "User Found",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User"
                        }
                    }
                }
            },
            404: {
                description: "User Not found with this id",
                content: {
                    "application/json": {
                        $ref: "#/components/schemas/Error"
                    }
                }
            }
        }
    }
}