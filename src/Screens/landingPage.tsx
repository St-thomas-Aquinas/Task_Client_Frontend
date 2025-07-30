
import { Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import "/src/App.css";


const ProfileTwo = () => {
  
 


  return (
    <div className="background">
   
   


      <Typography gutterBottom variant="h5" component="div" color="success">
            Wellcome to your Diabites Management Ai Agent
          </Typography>
          <Button variant="contained" color="error" size="large">
            <Link to="/singin"> 
            Get Started
                 </Link>
          </Button>
          <Typography gutterBottom variant="h5" component="div" color="success">
            This App is Meant , to Help people with diabites manage thier Condition,Running  a custom Model, If you feel sick or your condtion worsens,Tell Our Model what your feeling and it will set our for your a set of task to relive you of your condtion
          </Typography>
      
    </div>
  );
};

export default ProfileTwo;