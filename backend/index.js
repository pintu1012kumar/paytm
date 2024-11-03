const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index");

app.use(cors());
app.use(express.json());

const app = express();

app.use("/api/v1",mainRouter);
app.listen(3000);

// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changepassword..

// /api/v1/account/transfermoney
// /api/v1/account/balance
