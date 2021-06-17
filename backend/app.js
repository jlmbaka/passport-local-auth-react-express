const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Create app
const app = express();

// Config Middlewarses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
const secret = "secretcode";
app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cookieParser(secret));

// Routes
app.post("/login", (req, res) => {
  console.log(req.body);
});
app.post("/register", (req, res) => {
  console.log(req.body);
});
app.post("/user", (req, res) => {
  console.log(req.body);
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

// mongoose.connect(
//   "mongodb+srv://dbUser:dbUserPassword@cluster0.ts2vf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );
