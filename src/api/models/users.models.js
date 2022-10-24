const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;


const UsersSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

// UsersSchema.pre("save", function(req, res, next){
//     if(!validationEmail(this.email)){
//         console.log({code: 403, message: "Invalid email"})
//         return next();
//     }
//     if(!validationPassword(this.password)){
//         console.log({code: 403, message: "Invalid password"})
//         return next();
//     }
//     this.password = bcrypt.hashSync(this.password, 10);
//     next();
// })

const User = mongoose.model("User", UsersSchema);

module.exports = User;
