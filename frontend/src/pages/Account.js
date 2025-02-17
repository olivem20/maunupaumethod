import React, { useState } from "react";
import "./Account.css";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  const previousLessons = ["Lesson 1 on 11/20", "Lesson 2 on 11/25"];
  const upcomingLessons = [
    { date: "12/01", time: "10:00 AM", type: "Private Lesson" },
    { date: "12/05", time: "2:00 PM", type: "Group Lesson" },
  ];

  const [bookingMessage, setBookingMessage] = useState("");

  const handleBooking = (lessonType, price) => {
    setBookingMessage("Taking you to purchase!");
    navigate("/book-lesson", { state: { lessonType, price } });
  };

  return (
    <div className="account-page">
      <h1>My Account</h1>

      <div className="account-layout">
        {/* Upcoming Lessons Section */}
        <div className="lessons-section">
          <h2>Upcoming Lessons</h2>
          {upcomingLessons.length > 0 ? (
            <ul>
              {upcomingLessons.map((lesson, index) => (
                <li key={index}>
                  {lesson.date} at {lesson.time} - {lesson.type}
                </li>
              ))}
            </ul>
          ) : (
            <p>No upcoming lessons scheduled.</p>
          )}
        </div>

        {/* Book a Lesson Cards */}
        <div className="book-lesson-section">
          <h2>Book a Lesson</h2>
          <div className="lesson-cards">
            <div className="lesson-card">
              <h3>Private Lesson</h3>
              <p>1-on-1 coaching for technical improvement.</p>
              <button onClick={() => handleBooking("Private Lesson", 50)}>
                Book Now
              </button>
            </div>
            <div className="lesson-card">
              <h3>Group Lesson</h3>
              <p>Train with others in a small group setting.</p>
              <button onClick={() => handleBooking("Group Lesson", 30)}>
                Book Now
              </button>
            </div>
            <div className="lesson-card">
              <h3>Lesson Package</h3>
              <p>Save money by booking multiple sessions.</p>
              <button onClick={() => handleBooking("Lesson Package", 200)}>
                Book Now
              </button>
            </div>
            <div className="lesson-card">
              <h3>Clinics</h3>
              <p>
                Book a group clinic for a place to practice the skills you've
                honed!
              </p>
              <button onClick={() => handleBooking("Clinic", 25)}>
                Book Now
              </button>
            </div>
          </div>
          {bookingMessage && <p className="booking-message">{bookingMessage}</p>}
        </div>
      </div>

      {/* Previous Lessons */}
      <div className="previous-lessons-section">
        <h2>Previous Lessons</h2>
        <ul>
          {previousLessons.map((lesson, index) => (
            <li key={index}>{lesson}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Account;
