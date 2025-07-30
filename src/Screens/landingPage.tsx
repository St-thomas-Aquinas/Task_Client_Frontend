
import { Button, Typography,Box } from "@mui/material";
import { Link } from 'react-router-dom';
import "/src/App.css";


const ProfileTwo = () => {
  
 


  return (
    <div className="background">
      <br/>
      <br/>
      <Typography gutterBottom variant="h3" component="div" color="primary">
            MyDiabetes.Ai
          </Typography>
      <br/>
      <br/>
      <br/>
      <br/>
   
  
  <Typography gutterBottom variant="h5" component="div"  fontFamily={"cursive"} fontWeight={"200px"}>
            Wellcome to your Diabites Management Ai Agent
          </Typography>
          <br/><br/><br/>
          <Button variant="contained" color="success" size="large">
            <Link to="/singin"> 
            Get Started
                 </Link>
          </Button>
          <br/><br/><br/>
          <Typography gutterBottom variant="h5" component="div" color="primary">
            This App is Meant , to Help people with diabites manage thier Condition,Running  a custom Model, If you feel sick or your condtion worsens,Tell Our Model what your feeling and it will set our for your a set of task to relive you of your condtion
          </Typography>

  
      
      
    </div>
  );
};

export default ProfileTwo;