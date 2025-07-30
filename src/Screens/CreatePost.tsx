//Import
import "/src/App.css";
import { Stack, TextField, Button ,Typography} from "@mui/material";
import {  useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import Cookies from 'js-cookie';
//End Of Import
let severity: any = "";
let  result:any 

export default function App() {
  //const location = useLocation();
  const [_posts, _setPosts] = useState(" ");
  const [Message, setmessage] = useState(" ");
  const navigate = useNavigate();
  
  
// Get a cookie
const value = Cookies.get('name');
  //To ensure that the User Sing in first
if(!value){
  navigate('/Singin')
}

  return (
    <div className="App">
      <Typography gutterBottom variant="h1" component="div" color="success">
      MyDiabetes.Ai
          </Typography>
          <Typography gutterBottom variant="h6" component="div" color="success">
      Hi, Iam Doctor John Baptista, your Diabites Ai Model, Whenever you feel ill , tell me and i will create some task to manage your Diabites
          </Typography>
      <form
        name="form"
        onSubmit={async (e) => {
          e.preventDefault();

          const Data = new FormData(e.currentTarget);
         
          
          
          const API_URL = "https://doctor-tasky.onrender.com/predict";

const sendTask = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: Data.get("Description"), username:value })
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from the API");
    }

     result = await response.json();
   
    
    return result;
  } catch (error) {
    console.error("Error calling API:", error);
  }
};
sendTask()


          fetch("https://task-server-e7d3.onrender.com/Tasks", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(result),
          })
            .then(() => {
              //Setting the error and success message

              severity = "success";
              setmessage("Your Have Succesfully  Created a New Task");

              //End of Setting the error and success message
            })
            .catch(() => {
              severity = "error";
              setmessage("Failed to Succesfully  To create A new task ");
            });
        }}
      >
        
        <Alert severity={severity}>{Message}</Alert>
        <br />
        <Typography gutterBottom variant="h6" component="div" color="success">
            Doctor John Baptista
          </Typography>
          
        <br />
       
        <TextField
          name="Description"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="How are you felling?"
          variant="outlined"
        
        />
        <br />

        <br />
       
          <br />
          <Stack spacing={0} >
          <Button variant="contained" color="primary" type="submit">
            Get Prognostics
          </Button>
          <br />
        </Stack>
      </form>
    </div>
  );
}
