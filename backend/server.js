const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON requests
app.use(express.json()); // Body parser for JSON

// Import Routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const bookingRoutes = require('./routes/booking');

// Use Routes
app.use('/api/auth', authRoutes); // User Authentication
app.use('/api/products', productRoutes); // Product Management
app.use('/api/bookings', bookingRoutes); // Lesson Bookings

// MongoDB Connection
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err.message);
  });

// Default Route
app.get('/', (req, res) => {
  res.send('API is running...');
});
