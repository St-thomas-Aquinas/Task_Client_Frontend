
import { Button, Typography} from "@mui/material";
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
           
          This app is meant to help people with diabetes manage their condition. It runs a custom model. If you feel sick or your condition worsens, tell our model how you're feeling, and it will generate a set of tasks to help relieve your symptoms. </Typography>

  
      
      
    </div>
  );
};

export default ProfileTwo;