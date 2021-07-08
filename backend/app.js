const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const bcrypt = require("bcrypt");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const User = require("./user");
require("dotenv").config();

// Create app
const app = express();

// Mongoose
mongoose.connect(
    process.env.MONGO_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Mongoose is Connected");
    }
);

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
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig.js")(passport);

// Routes
app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.login(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log(req.user);
            });
        }
    })(req, res, next);
});

app.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
        }
    });
    console.log(req.body);
});

app.get("/user", (req, res) => {
    res.send(req.user);
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
