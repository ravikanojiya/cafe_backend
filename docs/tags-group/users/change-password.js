module.exports = {
    post: {
        tags: ["User"],
        description: "Change Password",
        operationId: "changePwd",
        security: [{
            bearerAuth: []
        }],
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ChangePassword"
                    }
                }
            }
        },
        responses: {
            200: {
                description: "User Password Updated Successfully"
            },
            500: {
                description: "Internal Server Error"
            }
        }
    }
}