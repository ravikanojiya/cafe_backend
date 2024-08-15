const { add, view, update } = require("../category/service");

module.exports = {
  add: (req, res) => {
    const body = req.body;
    add(body, (error, result) => {
      if (error) {
        return res.status(500).json({
          success: 0,
          message: "Database connection error...!",
        });
      }
      return res.status(200).json({
        success: 1,
        message: "Category added successfully..!",
      });
    });
  },
  view: (req, res) => {
    view((error, result) => {
      if (!error) {
        if (result.length == 0) {
          return res.status(404).json({
            success: 0,
            message: "No record found...!",
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
          message: "Database connection error...!",
        });
      }
    });
  },
  update: (req, res) => {
    const body = req.body;
    update(body, (error, result) => {
      if (!error) {
        if (result.affectedRows == 0) {
          return res.status(404).json({
            success: 0,
            message: "No record found...!",
          });
        } else {
          return res.status(200).json({
            success: 1,
            message: "Category updated successfully...!",
          });
        }
      } else {
        return res.status(500).json({
          success: 0,
          message: "Database connection error...!",
        });
      }
    });
  },
};
