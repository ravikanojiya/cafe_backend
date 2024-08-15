const pool = require("../../config/config");

module.exports = {
  signUp: (data, callback) => {
    pool.query(
      "select * from users where email=?",
      [data.email],
      (error, result) => {
        if (!error) {
          if (result.length <= 0) {
            pool.query(
              "insert into users (name,mobile,email,password,status,role) values(?,?,?,?,'false','user')",
              [data.name, data.mobile, data.email, data.password],
              (err, result) => {
                if (!err) {
                  return callback(null, "User created successfully..!");
                } else {
                  return callback(err);
                }
              }
            );
          }
        } else {
          return callback(null, "User already exist!!");
        }
      }
    );
  },
  login: (data, callback) => {
    pool.query(
      "select email,password,role,status from users where email=?",
      [data.email],
      (error, result) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  forgotPassword: (data, callback) => {
    pool.query(
      "select email,password from users where email=?",
      [data.email],
      (error, result) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  getAll: (callback) => {
    pool.query("select * from users where role='user'", [], (error, result) => {
      if (error) {
        return callback(error);
      }
      return callback(null, result);
    });
  },
  updateRole: (data, callback) => {
    pool.query(
      "update users set status=? where id=?",
      [data.status, data.id],
      (error, result) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  changePassword: (body, email, callback) => {
    pool.query(
      "select * from users where email=? and password=?",
      [email, body.oldPassword],
      (error, result) => {
        if (result.length == 0) {
          return callback(error);
        } else if (result.length > 0) {
          pool.query(
            "update users set password=? where email=?",
            [body.newPassword, email],
            (error1, updateResult) => {
              return callback(null, updateResult);
            }
          );
        }
      }
    );
  },
};
