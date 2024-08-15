const pool = require("../../config/config");

module.exports = {
  add: (data, callback) => {
    pool.query(
      "insert into category(name) values(?)",
      [data.name],
      (error, result) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  view: (callback) => {
    pool.query(
      "select * from category order by name asc",
      [],
      (error, result) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  update: (data, callback) => {
    pool.query(
      "update category set name=? where id=?",
      [data.name, data.id],
      (error, result) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
};
