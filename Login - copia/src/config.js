const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://jahelandrademurillo:zFEOe5zmwwju3lbV@2manygames.lr6cvjs.mongodb.net/AetherLand");

//check database connected or not
connect.then(() => {
    console.log("Database connected Successfully");
})
.catch(() => {
    console.log("Database cannot be connected");
})

//create a schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    email: {
        type:String,
        requiered: true
    }
});

//collection part
const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;