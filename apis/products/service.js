const pool = require("../../config/config");

module.exports = {
  add: (data, callback) => {
    pool.query(
      "insert into products(name,categoryId,description,price,status) values(?,?,?,?,'true')",
      [data.name, data.categoryId, data.description, data.price],
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
      "select p.name as productName, p.description as description, p.price as price, p.status as status, c.name as categoryName from products p inner join category c on(p.categoryId=c.id)",
      [],
      (error, result) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  getById: (id, callback) => {
    pool.query("select * from products where id=?", [id], (error, result) => {
      if (error) {
        return callback(error);
      }
      return callback(null, result);
    });
  },
  update: (data, callback) => {
    pool.query(
      "update products set name=?,categoryId=?, description=?,price=? where id=?",
      [data.name, data.categoryId, data.description, data.price, data.id],
      (error, result) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
  deleteProduct: (id, callback) => {
    pool.query("delete from products where id=?", [id], (error, result) => {
      if (error) {
        return callback(error);
      }
      return callback(null, result);
    });
  },
  updateStatus: (data, callback) => {
    pool.query(
      "update products set status=? where id=?",
      [data.status, data.id],
      (error, result) => {
        if (error) {
          return callback(error);
        }
        return callback(null, result);
      }
    );
  },
};
