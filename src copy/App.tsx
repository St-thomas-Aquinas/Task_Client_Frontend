// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Componets/Navigation';
import RedirectToHome from './Componets/RedirectToHome';
import Home from './Screens/Home';
import About from './Screens/About';
import SingUp from './Screens/SingUp';
import UserProfile from './Screens/UserProfile';

const App: React.FC = () => {

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/redirect" element={<RedirectToHome />} />
          <Route path="/userprofile/:username" element={<UserProfile />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;