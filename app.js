const express = require("express");
require("dotenv").config();
const app = express();
var cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs");
const userRouter = require("./apis/users/router");
const categoryRouter = require("./apis/category/router");
const productRouter = require("./apis/products/router");
const dashboardRouter = require("./apis/dashboard/router");
const billRouter = require("./apis/bills/router");
const cafeTableRouter = require("./apis/cafe_tables/router");
const tableOrderRouter = require("./apis/tableOrder/router");
app.use(express.json());
app.use(cors());
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(docs, {
    // explorer: true,
    swaggerOptions: {
      docExpansion: "none",
      displayRequestDuration: true,
    },
  })
);
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/product", productRouter);
app.use("/dashboard", dashboardRouter);
app.use("/bill", billRouter);
app.use("/cafeTable", cafeTableRouter);
app.use("/tableOrder", tableOrderRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server is running...!!", process.env.APP_PORT);
});
