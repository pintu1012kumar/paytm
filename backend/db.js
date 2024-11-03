const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pintu1012kumar:Kumar@123@cluster0.vdlp1.mongodb.net/');

const userSchema =  mongoose.Schema ({
    username:String,
    password:String,
    firstname:String,
    lastname:String
})

const User = mongoose.model("User",userSchema);

module.exports = {
    User
}