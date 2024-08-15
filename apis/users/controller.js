const {
  changePassword,
  signUp,
  login,
  forgotPassword,
  getAll,
  updateRole,
} = require("../users/service");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config;

const trnsporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
module.exports = {
  signUp: (req, res) => {
    const body = req.body;
    signUp(body, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: 0,
          message: "Database connection error..!",
        });
      }
      return res.status(200).json({
        success: 1,
        message: result,
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    login(body, (error, result) => {
      if (!error) {
        if (result.length <= 0 || result[0].password != body.password) {
          return res.status(401).json({
            success: 0,
            message: "Incorrect username and password",
          });
        } else if (result[0].status === "false") {
          return res.status(401).json({
            success: 0,
            message: "Wait for Admin approval",
          });
        } else if (result[0].password == body.password) {
          const response = { email: result[0].email, role: result[0].role };
          const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, {
            expiresIn: "8h",
          });
          return res.status(200).json({
            success: 1,
            token: accessToken,
          });
        } else {
          return res.status(401).json({
            success: 0,
            message: "Something went wrong.!Please try again later",
          });
        }
      } else {
        return res.status(500).json({
          success: 0,
          message: error,
        });
      }
    });
  },

  forgotPassword: (req, res) => {
    const body = req.body;
    forgotPassword(body, (error, result) => {
      if (!error) {
        if (result.length <= 0) {
          return res.status(200).json({
            success: 1,
            message: "Password sent successfully to your registerd email id",
          });
        } else {
          var mailOptions = {
            from: process.env.EMAIL,
            to: result[0].email,
            subject: "Password by cafe managment system",
            html:
              "<p><h3>Your Login details for cafe management system</h3></p><br><p>Email:<b>" +
              result[0].email +
              "</b></p><br><p>Password:<b>" +
              result[0].password +
              '</b></p><br><a href="http:localhost:4200/">Click here to Login</a>',
          };
          trnsporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent" + info.response);
            }
          });
          return res.status(200).json({
            success: 1,
            message: "Password sent successfully to your email",
          });
        }
      } else {
        return res.status(500).json({
          success: 0,
          message: error,
        });
      }
    });
  },

  getAll: (req, res) => {
    getAll((err, result) => {
      if (!err) {
        if (result.length == 0) {
          return res.status(404).json({
            success: 0,
            message: "Record does't exist",
          });
        } else {
          return res.status(200).json({
            success: 1,
            message: result,
          });
        }
      } else {
        return res.status(500).json({
          success: 0,
          message: err,
        });
      }
    });
  },
  updateRole: (req, res) => {
    const body = req.body;
    updateRole(body, (error, result) => {
      if (!error) {
        if (result.affectedRows == 0) {
          return res.status(404).json({
            success: 0,
            message: "User id does not extist",
          });
        }
        return res.status(200).json({
          success: 1,
          message: "User Updated successfully..!!",
        });
      } else {
        return res.status(500).json({
          success: 0,
          message: error,
        });
      }
    });
  },
  checkToken: (req, res) => {
    return res.status(200).json({
      message: true,
    });
  },
  changePassword: (req, res) => {
    const body = req.body;
    const email = res.local.email;
    changePassword(body, email, (error, result) => {
      if (result == undefined) {
        return res.status(400).send({
          success: 0,
          message: "Incorrect Old Password",
        });
      } else {
        return res.status(200).send({
          success: 1,
          message: "Password Updated...",
        });
      }
    });
  },
};
