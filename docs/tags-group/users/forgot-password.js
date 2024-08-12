module.exports = {
    post: {
        tags: ["User"],
        description: "Forgot Password",
        operationId: "forgotPassword",
        parameters: [],
        requestBody: {
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/ForgotPwd"
                    }
                }
            }
        },
        responses: {
            200: {
                description: "Password Sent Successfully"
            },
            500: {
                description: "Internal Server Error"
            }
        }
    }
}