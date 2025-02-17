import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css'; // Import global styles
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Programs from './pages/Programs';
import Coaches from './pages/Coaches';
import RegisterLogIn from './pages/RegisterLogIn';
import Account from './pages/Account';
import Navbar from './components/Navbar';
import BookLesson from './pages/BookLesson';



function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar will be visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/auth" element={<RegisterLogIn />} />
        <Route path="/account" element={<Account />} />
        <Route path="/book-lesson" element={<BookLesson />} />
      </Routes>
    </Router>
  );
}

export default App;
