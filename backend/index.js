const express = require("express");

const mainRouter = require("./routes/index");

const app = express();

app.use("/api/v1",mainRouter);

// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changepassword..

// /api/v1/account/transfermoney
// /api/v1/account/balance
