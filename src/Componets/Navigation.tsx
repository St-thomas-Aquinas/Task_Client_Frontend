

import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Fab from '@mui/material/Fab';

import AddIcon from '@mui/icons-material/Add';

import Home from "../Screens/Home"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});
import { useLocation } from "react-router-dom";
export default function BottomAppBar() {
  const location = useLocation();
  const navigate = useNavigate();
  function max(){
    navigate('/myprofile',{state:location.state})
  }
  function mypost(){
    navigate('/Home',{state:location.state})
  }
  const [sing, setsing] = useState(null);
  if(sing == null){
    {<Home/>}
  }

  function set(){
    setsing(location.state)
  }
  return (
    <React.Fragment>

      
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
     
        <Toolbar>
          <IconButton color="inherit" onClick={mypost}>
              <Typography gutterBottom variant="h5" component="div"  color="warning">
                  My Posts
                </Typography>
          </IconButton>

          <IconButton color="inherit" aria-label="open drawer" onClick={set}>
            
            <Link to="/singin"> <Typography gutterBottom variant="h5" component="div" color="warning">
                sing in
                </Typography> </Link>
          </IconButton>
          <StyledFab color="warning" aria-label="add">
            
           
           <Link to="/CreatePost">  <AddIcon /></Link>
          
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="warning">
          <Link to="/Home">  <Typography gutterBottom variant="h5" component="div"  color="warning">
                  HOME
                </Typography> </Link>
          </IconButton>
          
          <IconButton color="inherit" onClick={max}>
               
          <Typography gutterBottom variant="h5" component="div"  color="success">
                {`${location.state}`}
                </Typography>
          </IconButton>
        
        </Toolbar>
      
          
        
      </AppBar>
    </React.Fragment>
  );
}


