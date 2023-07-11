const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const app = express();
// express 
app.use(
  cookieSession({ name: "session", keys: ["Deep"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, HEAD,POST, PUT, DELETE",
    Credentials: true,
  })
);

app.listen("5000", () => {
  console.log("listening on port 5000");
});
