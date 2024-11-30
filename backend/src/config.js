//creates database connection

const { ConnectionPoolClosedEvent } = require("mongodb");
const mongoose = require("mongoose");

const uri = 'mongodb+srv://olivem2016:Maunupau1!@clustermaunupaumethod.tlfyu.mongodb.net/login?retryWrites=true&w=majority';

//const connect = mongoose.connect("mongodb://clustermaunupaumethod/login");
mongoose.connect(uri)
.then(() => {
    console.log('Database connected successfully');
})
.catch((err) => {
    console.error('Database connection failed:', err);
});
//check database connected or not
//connect.then(() => {
      
//});

//create a schema
const LoginSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure no duplicate emails
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;

