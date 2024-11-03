const express = require("express");
const zod = require("zod");
const User = require("../db");
const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");
const router = express.Router();
// signup and signin routes

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()
})


router.post("/signup", async (req, res) => {
   const body= req.body;
   const {success} = signupSchema.safeParse(req.body);
   if(!success){
    return res.json({
        message:"Email already taken / Incorrect inputs"
    })
   }

   const user = User.findOne({
    username: body.username
   })

   if(user._id) {
    return res.json({
        message: "Email already taken / Incorrect inputs"
    })
   }

   const dbuser = await User.create(body);
   const token = jwt.sign({
    userId: dbuser._id
   }, JWT_SECRET);

   res.json({
    message: " User created successfully",
    token: token
   })

})

module.exports = router;