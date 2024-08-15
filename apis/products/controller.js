const {
  add,
  view,
  getById,
  update,
  deleteProduct,
  updateStatus,
} = require("../products/service");

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
        message: "Product added successfully...!",
      });
    });
  },
  view: (req, res) => {
    view((error, result) => {
      if (!error) {
        if (result.length == 0) {
          return res.status(404).json({
            success: 0,
            message: "No records found...!",
          });
        } else {
          return res.status(200).json({
            success: 1,
            data: result,
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
  getById: (req, res) => {
    const id = req.params.id;
    getById(id, (error, result) => {
      if (!error) {
        if (result.length == 0) {
          return res.status(404).json({
            success: 0,
            message: "No records found...!",
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
            message: "No records found...!",
          });
        } else {
          return res.status(200).json({
            success: 1,
            message: "Product updated successfully...!",
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
  deleteProduct: (req, res) => {
    const id = req.params.id;
    deleteProduct(id, (error, result) => {
      if (!error) {
        if (result.affectedRows == 0) {
          return res.status(404).json({
            success: 0,
            message: "No record found...!",
          });
        } else {
          return res.status(200).json({
            success: 1,
            message: "Product deleted successfully...!",
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
  updateStatus: (req, res) => {
    const body = req.body;
    updateStatus(body, (error, result) => {
      if (!error) {
        if (result.affectedRows == 0) {
          return res.status(404).json({
            success: 0,
            message: "No record found...!",
          });
        } else {
          return res.status(200).json({
            success: 1,
            message: "Product status updated successfully...!!",
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
