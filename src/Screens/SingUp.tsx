//Declaration of Imports
import "/src/App.css";
import {Typography,TextField,Button} from '@mui/material';
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { useState} from "react";
// End of Declaration of Imports

//Begining of App
export default function App() {
  //Declaration Of constasts and Variables
  const [Success, setsuccess] = useState(false);
  const [Message, setmessage] = useState(" ");
  const [severity, setseverity] = useState(``);
  const navigate = useNavigate();
  //End Declaration Of constasts and Variables


  return (
    <div className="App" >

      <form onSubmit={(e) => {
        //Prenting defualt Behaivor
        e.preventDefault()
        //
        const formData = new FormData(e.currentTarget);
        const formvalues = Object.fromEntries(formData)
        alert(JSON.stringify(formvalues))

      //Fetch request  
        fetch('https://task-server-e7d3.onrender.com/users',{
        method:"POST",
         headers:{"content-Type":"application/json"},
          body: JSON.stringify(formvalues)
        
          
  }).then(() =>{
    setsuccess(true)
    
  })
  //Setting the error and success message and Redirecting the user to sing in page
  if(Success == true){
    setseverity(`success`)
    setmessage('Your Have Succesfully Created a Task Master Account')
    navigate('/singin')
  }else{
    setseverity("error")
    setmessage('Failed to create a Task Master Account')
  
  }

      }} >
          <Typography gutterBottom variant="h5" component="div" color="primary">
                Sing Up for Task Master.
          </Typography> 
          <br/>
          <Alert severity = {severity}>{Message}</Alert>


        <TextField
          name="FirstName"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter Your FirstName."
          variant="outlined"
        />
        <br />


        <TextField
         name="LastName"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter Your lastNames."
          variant="outlined"
        />
         <br />


        <TextField
         name="Email"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter your Email."
          variant="outlined"
        />
        <br />


        <TextField
         name="UserName"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter your Username."
          variant="outlined"
        />
        <br />
        
        <TextField
         name="Password"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Password."
          variant="outlined"
        />
        <br />

        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Confirm Password."
          variant="outlined"
        />
        <br />
      
        <Button variant="contained" color="primary" type="submit">
          Sing Up
        </Button>
        <Link to="/SingUp">  <Typography gutterBottom variant="h5" component="div"  color="warning">
                  or Sing in, If you Have an Account Already.
                </Typography> </Link>
      </form>
  
        </div>
  );
}
