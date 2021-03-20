const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");

const app = express();

// importing routes
const customerRoutes = require("./routes/customer");
const { urlencoded } = require("express");

// settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlerawes
app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: process.env.DB_PORT,
      database: process.env.DB_DATABASE,
    },
    "single"
  )
);
app.use(express.urlencoded({extended: false }));

//routes
app.use("/", customerRoutes);

//static files
app.use(express.static(path.join(__dirname, "public")));

//starting the server
app.listen(app.get("port"), () => {
  console.log("Server on port 3000");
});
