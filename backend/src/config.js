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
    lessonsPurchased: [
        {
          lessonId: { type: mongoose.Schema.Types.ObjectId, ref: "Lesson" },
          purchasedAt: { type: Date, default: Date.now }, // Timestamp of purchase
        },
      ],
});

const LessonSchema = new mongoose.Schema({
    type: { type: String, required: true }, // Private, Group, or Package
    price: { type: Number, required: true },
    purchasedBy: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        purchasedAt: { type: Date, default: Date.now }, // Timestamp of purchase
      },
    ],
    totalPurchases: { type: Number, default: 0 }, // Track how many times purchased
  });
  


const User = new mongoose.model("users", LoginSchema);
const Lesson = new mongoose.model("lessons", LessonSchema);

module.exports = {User, Lesson};

