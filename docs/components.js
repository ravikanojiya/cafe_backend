module.exports = {
    components: {
        schemas: {
            id: {
                type: "number",
                description: "Pass Id",
                example: 2
            },
            name: {
                type: "string",
                description: "Name of the User",
                example: "Ravi"
            },
            mobile: {
                type: "string",
                description: "mobile number of the user",
                example: '1234567890'
            },
            email: {
                type: "string",
                description: "e-mail id of the user",
                example: 'ravi@ravi.com'
            },
            password: {
                type: "string",
                description: "password of the user",
                example: 'abcd'
            },
            status: {
                type: "string",
                description: "Status of the user in true or false",
                example: "false"
            },
            role: {
                type: "string",
                description: "Role of the user, user or admin",
                example: "user"
            },
            User: {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        description: "Id of the user",
                        example: 2
                    },
                    name: {
                        type: "string",
                        description: "Name of the User",
                        example: "Ravi"
                    },
                    mobile: {
                        type: "string",
                        description: "mobile number of the user",
                        example: '1234567890'
                    },
                    email: {
                        type: "string",
                        description: "e-mail id of the user",
                        example: 'ravi@ravi.com'
                    },
                    password: {
                        type: "string",
                        description: "password of the user",
                        example: 'abcd'
                    },
                    status: {
                        type: "string",
                        description: "Status of the user in true or false",
                        example: "false"
                    },
                    role: {
                        type: "string",
                        description: "Role of the user, user or admin",
                        example: "user"
                    },
                }
            },
            SignUpInput: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "Name of the User",
                        example: "Ravi"
                    },
                    mobile: {
                        type: "string",
                        description: "mobile number of the user",
                        example: '1234567890'
                    },
                    email: {
                        type: "string",
                        description: "e-mail id of the user",
                        example: 'ravi@ravi.com'
                    },
                    password: {
                        type: "string",
                        description: "password of the user",
                        example: 'abcd'
                    },
                }
            },
            LoginInput: {
                type: "object",
                properties: {
                    email: {
                        type: "string",
                        description: "e-mail id of the user",
                        example: 'ravi@ravi.com'
                    },
                    password: {
                        type: "string",
                        description: "password of the user",
                        example: 'abcd'
                    },
                }
            },
            LoginResponse: {
                type: "object",
                properties: {
                    status: {
                        type: "number",
                        description: "Status of the login",
                        example: 1
                    },
                    token: {
                        type: "string",
                        description: "Bearer token of the user",
                        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhdmlAcmF2aS5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY2NDI3MjM5NywiZXhwIjoxNjY0MzAxMTk3fQ.tS_79SkYIUrwQGzuVtxDS5r1kcoHGBKWO9XzseskIDk"
                    }
                }
            },
            ForgotPwd: {
                type: "object",
                properties: {
                    email: {
                        type: "string",
                        description: "e-mail id of the user",
                        example: 'ravi@ravi.com'
                    }
                }
            },
            UpdateUserStatus: {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        description: "Id of the user",
                        example: 2
                    },
                    status: {
                        type: "string",
                        description: "Status of the user in true or false",
                        example: "false"
                    },
                }
            },
            ChangePassword: {
                type: "object",
                properties: {
                    oldPassword: {
                        type: "string",
                        description: "Old Password of the user",
                        example: "abcd"
                    },
                    newPassword: {
                        type: "string",
                        description: "New Password to update",
                        example: "efgh"
                    },
                }
            },
            CategoryInput: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "Name of the category",
                        example: "Cold Drink"
                    }
                }
            },
            UpdateCategoryInput: {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        description: "Id of the Category",
                        example: 2
                    },
                    name: {
                        type: "string",
                        description: "Name of the category",
                        example: "Cold Drink"
                    }
                }
            },
            ProductInput: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "Name of the product",
                        example: "Cold Coffee"
                    },
                    categoryId: {
                        type: "number",
                        description: "Id of the category of product",
                        example: 1
                    },
                    description: {
                        type: "string",
                        description: "description of product",
                        example: "The coldest coffee you will ever find"
                    },
                    price: {
                        type: "number",
                        description: "price of product",
                        example: 48
                    },
                },
            },
            UpdateProductInput: {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        description: "Id of the product to update",
                        example: 1
                    },
                    name: {
                        type: "string",
                        description: "Name of the product",
                        example: "Cold Coffee"
                    },
                    categoryId: {
                        type: "number",
                        description: "Id of the category of product",
                        example: 1
                    },
                    description: {
                        type: "string",
                        description: "description of product",
                        example: "The coldest coffee you will ever find"
                    },
                    price: {
                        type: "number",
                        description: "price of product",
                        example: 48
                    },
                },
            },
            UpdateProductStatusInput: {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        description: "Id of the product to update",
                        example: 1
                    },
                    status: {
                        type: "string",
                        description: "Status Of the product",
                        example: "false"
                    }
                }
            },
            Error: {
                type: "object",
                properties: {
                    message: {
                        type: "string",
                        description: "Error message",
                        example: "Not Found"
                    },
                    internal_code: {
                        type: "string",
                        description: "Error Internal code",
                        example: "Invalid Parameters"
                    }
                }
            }
        },
        securitySchemes: {
            bearerAuth: {
                type: "apiKey",
                name: "authorization",
                scheme: "bearer",
                in: 'header'
            }
        }
    }
}