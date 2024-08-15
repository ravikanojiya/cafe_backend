const pool = require("../../config/config");
module.exports = {
  cateCount: (callback) => {
    pool.query(
      "select count(id) as categoryCount from category",
      [],
      (error, result) => {
        if (!error) {
          return callback(null,result);
        } else {
          return callback(error);
        }
      }
    );     
  },
  productCount:(callback)=>{
    pool.query(
        "select count(id) as productCount from products",
        [],
        (error, result) => {
          if (!error) {
            return callback(null,result);
          } else {
            return callback(error);
          }
        }
      );
  }
};
