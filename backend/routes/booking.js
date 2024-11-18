const express = require('express');
const router = express.Router();

// Example booking data (replace with a database later)
let bookings = [];

// Create a booking
router.post('/', (req, res) => {
  const newBooking = {
    id: bookings.length + 1,
    userId: req.body.userId, // ID of the user making the booking
    productId: req.body.productId, // ID of the product being booked
    date: req.body.date, // Booking date
    time: req.body.time, // Booking time
  };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

// Get all bookings for a user
router.get('/user/:userId', (req, res) => {
  const userBookings = bookings.filter((b) => b.userId === parseInt(req.params.userId));
  res.json(userBookings);
});

// Delete a booking
router.delete('/:id', (req, res) => {
  bookings = bookings.filter((b) => b.id !== parseInt(req.params.id));
  res.status(204).send(); // No content
});

module.exports = router;
