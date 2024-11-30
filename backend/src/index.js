const cors = require('cors');
const express = require('express');
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Allow your frontend
    methods: ['GET', 'POST', 'OPTIONS'], // Allowed methods
    allowedHeaders: ['Content-Type'], // Allow headers
    credentials: true, // Allow credentials if needed
}));

// Preflight request handler
app.options('*', cors()); // Handles preflight requests for all routes


//convert data into json format
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//chat
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).json({});
    }
    next();
});

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});


app.set('view engine', 'ejs');

//static folder path
app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    try {
        // Check if user already exists by email
        const existingUser = await collection.findOne({ email }); // Use email here
        if (existingUser) {
            return res.status(400).send("An account with this email already exists.");
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create the user
        const newUser = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password: hashedPassword, // Store the hashed password
        };

        await collection.insertMany(newUser);

        // Send a success response
        res.status(201).send("Signup successful! You can now log in.");
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).send("An error occurred. Please try again.");
    }
});


//login user
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try{
        const check = await collection.findOne({ email });
        if(!check) {
            res.send("User cannot be found");
        }
        //compare hashed password with plain password
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if(isPasswordMatch){
            res.render("home");
        } else {
            req.send("Invalid email or password");
        }
    } catch {
        res.send("Wrong detail");
    }
})

const port = 5001;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})
