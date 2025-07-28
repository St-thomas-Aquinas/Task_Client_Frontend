//importing Modules
import { useState } from "react";
import "/src/App.css";
import { TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
//End of importing Modules

//Declaring Global Variables
let severity: any = "";

//End of Declaring Global Variables


export default function App() {
  //Declaring Constants
  const navigate = useNavigate();
  const [_posts, _setPosts] = useState(" ");
  const [Message, setmessage] = useState(" ");
  //End O f Declaring Constants


  return (
    <div className="App">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          //Declaring Variables to get data from Form
          const formData = new FormData(e.currentTarget);
          const formvalues: any = Object.fromEntries(formData);
          //End of Declaring Variable to get data from Form

          //API Call to the Back End
          const response = await fetch(
            `https://task-server-e7d3.onrender.com/users/api/auth/login/${JSON.parse(JSON.stringify(formvalues.UserName))}`
          );
          const response1 = await fetch(
            `https://task-server-e7d3.onrender.com/users/api/auth/login/${JSON.parse(JSON.stringify(formvalues.PassWord))}`
          );
          const data = await response1.json();
          let data1 = await response.json();
          data1 
          //End of API call to the Back End


          //Getting Token from Back End and Saving It Locally
          const token = JSON.stringify(data.token);
          localStorage.setItem("Access", token);
          localStorage.setItem("UserName",JSON.parse(JSON.stringify(formvalues.UserName)));
          //End
        
             
          //Redirecting User to Home Page 
          if (data.responseDetails[1] != null) {
            return navigate("/nav", { state: formData.get("UserName") });
          }
          //End Of redirecting user to Home Page

          
          //Setting the error and success message
          if (data.responseDetails != null) {
            severity = "success";
            setmessage(
              "Your Have Succesfully  Loged In to your task Master Account"
              
            );
            
          } else {
            severity="error"
            setmessage(
              "Failed to Succesfully  Loged In to your task Master Account, Check UserName And Password and try Again "
            );
          }
          //End of Setting the error and success message

        }}
      >
        <br />
        <h3>Sing In</h3>
        <br />

        <Alert severity={severity}>{Message}</Alert>
        <br />

        <TextField
          name="UserName"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter your Username"
          variant="outlined"
        />
        <br />

        <TextField
          name="PassWord"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter PassWord"
          variant="outlined"
        />

        <br />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Sing In
        </Button>

        <Link to="/SingUp">
          <Typography gutterBottom variant="h5" component="div" color="success">
            or Sing UP, if you do not have an account
          </Typography>
        </Link>
      </form>
    </div>
  );
}
