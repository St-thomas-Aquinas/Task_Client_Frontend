
import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
//import Home from "../Screens/Home"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {  useState } from "react";
import Avatar from '@mui/material/Avatar';
const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});
import { useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

export default function BottomAppBar() {

  const [posts, setPosts] = useState(" ");

  const location = useLocation();
const navigate = useNavigate();
//const UserName = location.state; 
const value = Cookies.get('name');
 
  function max(){
    navigate('/updateprofile',{state:location.state
    
    })
  }

  function mypost(){
    navigate('/MyTrash',{state:location.state})
  }
  
  function Home(){
    navigate('/Home',{state:location.state})
  }
  
  function Createpost(){
    navigate('/CreatePost',{state:location.state})
  }
  const [sing, setsing] = useState(null);
  if(sing == null){
  ////  {<Home />}
  }

  function set(){
    setsing(location.state)
  }

  
//Function to fetch task

  async function HandleRequest() {
  
    try {
     
      const response = await fetch(
        `https://task-server-e7d3.onrender.com/users/MyProfile/${value}`
      );

      const data = await response.json();
      const data2 = data.User.Avatar;
      

      setPosts(JSON.parse(JSON.stringify(data2)));
     
    } catch (e) {
    } finally {
      
    }
  }
  
  HandleRequest();
  

  return (
    <React.Fragment>

      
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
     
        <Toolbar>
          <IconButton color="inherit" onClick={mypost}>
              <Typography gutterBottom variant="h5" component="div"  color="warning">
              <DeleteIcon fontSize='large'/>
                </Typography>
          </IconButton>

          <IconButton color="inherit" aria-label="open drawer" onClick={set}>
            
            <Link to="/singin"> <Typography gutterBottom variant="h5" component="div" color="success">
          
                </Typography> </Link>
          </IconButton>
          <StyledFab color="success" aria-label="add" onClick={Createpost}>
          
             <AddIcon />
          
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="warning" onClick={Home}>
            <Typography gutterBottom variant="h5" component="div"  color="success">
            <HomeIcon fontSize='large'/>
                </Typography> 
          </IconButton>
          
          <IconButton color="inherit" onClick={max}>
               
          <Typography gutterBottom variant="h5" component="div"  color="success">
          <Avatar alt="my Avatar" src={posts} />
             
                </Typography>
          </IconButton>
        
        </Toolbar>
      
          
        
      </AppBar>
    </React.Fragment>
  );
}


