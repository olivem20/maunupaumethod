import React from 'react';
import './Programs.css'; // Import a CSS file for styling

function ProgramsPage() {
  return (
    <div className="programs-page">
      <header className="programs-header">
        <h1>Our Programs</h1>
        <p>Explore the variety of tennis programs we offer for all ages and skill levels!</p>
      </header>

      <div id="adult-clinics" className="program-section">
        <h2>Adult Clinics</h2>
        <p>
          Our Adult Clinics focus on building skills, improving strategy, and staying fit while enjoying tennis.
          Whether you're a beginner or an advanced player, there's a clinic for you.
        </p>
      </div>

      <div id="junior-clinics" className="program-section">
        <h2>Junior Clinics</h2>
        <p>
          Designed for younger players, our Junior Clinics teach the fundamentals of tennis in a fun and engaging
          environment. Perfect for beginners and those looking to improve their game.
        </p>
      </div>

      <div id="camps" className="program-section">
        <h2>Camps</h2>
        <p>
          Join our seasonal camps to take your tennis skills to the next level! Camps are packed with drills,
          games, and match play to ensure players improve while having a great time.
        </p>
      </div>

      <div id="private-lessons" className="program-section">
        <h2>Private Lessons</h2>
        <p>
          Receive one-on-one coaching tailored to your specific needs. Our experienced coaches will help you refine
          your technique and reach your tennis goals faster.
        </p>
      </div>
    </div>
  );
}

export default ProgramsPage;
