// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Componets/Navigation';
import RedirectToHome from './Componets/RedirectToHome';
import Readmore from './Screens/ReadMore';
import CreatePost from './Screens/CreatePost';
import SingUp from './Screens/SingUp';
import Home from './Screens/Home';
import Singin from './Screens/Singin';
import Profile from './Screens/updateprofile';
import Myposts from './Screens/myposts';
import Updateprofile from './Screens/updateprofile';
import Nav from './Componets/Navigation';
import { ReadMore } from '@mui/icons-material';

const App: React.FC = () => {

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          
          <Route path="/Readmore" element={<Readmore />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/Singin" element={<Singin />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/myposts" element = {<Myposts />} />
          <Route path="/updateprofile" element = {<Updateprofile />} />
          <Route path="/Home" element={<Home />} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;