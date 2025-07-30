//importing Modules
import { useState } from "react";
import "/src/App.css";
import { TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Cookies from 'js-cookie';


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
          severity = "success";
          setmessage(
            "Loading Please wait...."
            
          );
          //API Call to the Back End
        
          const response = await fetch("https://task-server-e7d3.onrender.com/Users/api/auth/login", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(formvalues),
          })
          const data = await response.json()
          const data2 = JSON.stringify(data)
          data2
      
           
          
          //End of API call to the Back End
         
        // Set a cookie
Cookies.set('name', JSON.parse(JSON.stringify(formvalues.UserName)), { expires: 7 });





          //Getting Token from Back End and Saving It Locally
          const token = JSON.stringify(data.token);
          localStorage.setItem("Access", token);
          localStorage.setItem("UserName",JSON.parse(JSON.stringify(formvalues.UserName)));
          //End
     
             
          //Redirecting User to Home Page 
          if (data.responseDetails[1] != "") {
            return navigate("/createPost", { state: formData.get("UserName") });
          }
          
          //End Of redirecting user to Home Page

          
          //Setting the error and success message
          if (data.responseDetails[1] != "") {
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
        <Typography gutterBottom variant="h5" component="div" color="success">
            Sing In to MyDiabites.Ai
          </Typography>
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
          name="Password"
          style={{ width: "200px", margin: "5px" }}
          type="password"
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
