/*import React, { useState } from 'react';
import './App.css';
import drdo from './drdo.jpg';

function App() {
  const [interviewer] = useState({
    username: 'Interviewer Name',
    email: 'interviewer@example.com',
    photo: 'https://via.placeholder.com/300', // Placeholder image URL for profile
    cornerPhoto: drdo // Photo for the right corner
  });

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="small-profile-pic">
          <img src={interviewer.photo} alt="Interviewer" />
        </div>
        <nav>
          <ul>
            <li><a href="#profile">Profile</a></li>
          </ul>
        </nav>
        <button className="logout">Logout</button>
      </aside>
      <div className="content-area">
        <header className="header">
          <h1>Welcome, {interviewer.username}</h1>
        </header>
        <section className="profile">
          <div className="profile-details">
            <img src={interviewer.photo} alt="Interviewer" className="profile-photo" />
            <p className="username">Username: {interviewer.username}</p>
            <p className="email">Email: {interviewer.email}</p>
          </div>
        </section>
        <img src={interviewer.cornerPhoto} alt="Corner" className="corner-photo" />
      </div>
    </div>
  );
}

export default App;*/
import React, { useState, useEffect } from 'react';
import './App.css';
import drdo from './drdo.jpg';

function App() {
  const [interviewer, setInterviewer] = useState({
    username: '',
    email: '',
    photo: '', // Start with an empty string
    cornerPhoto: drdo // Photo for the right corner
  });

  useEffect(() => {
    // Replace 'API_ENDPOINT' with your actual backend API endpoint
    fetch('http://localhost:5000/api/interviewer')
      .then(response => response.json())
      .then(data => {
        setInterviewer(prevState => ({
          ...prevState,
          username: data.username,
          email: data.email,
          photo: data.photo
        }));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="small-profile-pic">
          <img src={interviewer.photo} alt="Interviewer" />
        </div>
        <nav>
          <ul>
            <li><a href="#profile">Profile</a></li>
          </ul>
        </nav>
        <button className="logout">Logout</button>
      </aside>
      <div className="content-area">
        <header className="header">
          <h1>Welcome, {interviewer.username}</h1>
        </header>
        <section className="profile">
          <div className="profile-details">
            <img src={interviewer.photo} alt="Interviewer" className="profile-photo" />
            <p className="username">Username: {interviewer.username}</p>
            <p className="email">Email: {interviewer.email}</p>
          </div>
        </section>
        <img src={interviewer.cornerPhoto} alt="Corner" className="corner-photo" />
      </div>
    </div>
  );
}

export default App;
