// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Componets/Navigation';

import LandingPage from './Screens/landingPage';
import CreatePost from './Screens/CreatePost';
import SingUp from './Screens/SingUp';
import Home from './Screens/Home';
import Singin from './Screens/Singin';
import Profile from './Screens/updateprofile';
import Myposts from './Screens/myposts';
import Updateprofile from './Screens/updateprofile';
import MyTrash from './Screens/myTrash';
import UpdatePost from './Screens/UpdatePost'
import Nav from './Componets/Navigation';


const App: React.FC = () => {

  return (
    <Router>
      <div>
     
        
        <Routes>
       
          <Route path="/" element={<LandingPage />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/Singin" element={<Singin />} />
          <Route path="/createPost" element={<CreatePost />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/myposts" element = {<Myposts />} />
          <Route path="/updateprofile" element = {<Updateprofile />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/MyTrash" element = {<MyTrash />} />
          <Route path="/updateTask" element = {<UpdatePost />} />
         
        </Routes>
      
        
      </div>
    </Router>
  );
};

export default App;