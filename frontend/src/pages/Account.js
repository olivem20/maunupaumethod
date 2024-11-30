import React from 'react';

function Account() {
  // Example data; fetch this from your backend
  const previousLessons = ["Lesson 1 on 11/20", "Lesson 2 on 11/25"];
  const upcomingLessons = ["Lesson 3 on 12/01", "Lesson 4 on 12/05"];

  return (
    <div className="account-page">
      <h1>My Account</h1>
      <h2>Upcoming Lessons</h2>
      <ul>
        {upcomingLessons.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
      <h2>Previous Lessons</h2>
      <ul>
        {previousLessons.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
    </div>
  );
}

export default Account;
