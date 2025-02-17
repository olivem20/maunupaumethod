import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookLesson() {
  const location = useLocation();
  const navigate = useNavigate();

  const { lessonType, price } = location.state || {}; // Get data from state

  const handleConfirmBooking = () => {
    alert(`You have booked a ${lessonType} for $${price}!`);
    // Navigate back to My Account or another page
    navigate("/");
  };

  return (
    <div className="book-lesson-page">
      <h1>Book Your Lesson</h1>
      {lessonType && price ? (
        <div>
          <h2>{lessonType}</h2>
          <p>Price: ${price}</p>
          <button onClick={handleConfirmBooking}>Confirm Booking</button>
        </div>
      ) : (
        <p>No lesson selected. Please go back and select a lesson.</p>
      )}
    </div>
  );
}

export default BookLesson;
