const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const User = require('./models/user');
const Lead = require('./models/leads');

const port = process.env.PORT || 5000;
const ConnectionDB = require("./database");
ConnectionDB();

app.use(express.json());


//seting static files
app.use(express.static("public")); //for servinhg staticfile
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

//setting view engine to EJS
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/login", (req, res) => {
    res.render("login");
  });
  app.get("/signup", (req, res) => {
    res.render("signup");
  });
  app.get("/leads", (req, res) => {
    res.render("leads");
  });
  app.get("/leadmanagement", (req, res) => {
    res.render("leadManagement");
  });


  
//   app.use("/api/image",require("./multer"))
//   app.use("/api/auth",require("./routes/Auth/userAuth"))
app.listen(port, () => console.log(`Server up and running...at ${port}`))