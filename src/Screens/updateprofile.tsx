import { Email } from "@mui/icons-material";
import "/src/App.css";
import {
  
  TextField,
  Button,
} from '@mui/material';
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export default function App() {
  const location = useLocation();
  const [FirstName, setFirstName] = useState(" ");
  const [LastName, setLastName] = useState(" ");
  const [UserName, setUserName] = useState(" ");
  const [Email, setEmail] = useState(" ");

   async function max(params:type) {
  
         const res = await fetch(`https://blogit-server-9cb0.onrender.com/users/${location.state}`)
        const data = await res.json();
      
        const FirstName = data.data.user.FirstName
        const lastName = data.data.user.LastName
        const UserName = data.data.user.UserName
        const Email = data.data.user.Email
        setFirstName(JSON.parse(JSON.stringify(FirstName)))
        setLastName(JSON.parse(JSON.stringify(lastName)))
        setUserName(JSON.parse(JSON.stringify(UserName)))
        setEmail(JSON.parse(JSON.stringify(Email)))
  }
  max()
  return (
    <div className="App" >
      
<h4>Change Account Details</h4>
      <form onSubmit={async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
      const formvalues = Object.fromEntries(formData)
      alert(JSON.stringify(formvalues))
        fetch(`http://localhost:5000/users/${location.state}`,{
          method:"put",
         headers:{"content-Type":"application/json"},
          body: JSON.stringify(formvalues)
          
  }).then(() =>{
    alert("New user created")
  })
      }} >
        <TextField
        name="FirstName"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          //label="Enter Your FirstName"
          variant="outlined"
          defaultValue = {FirstName}
          
        />
        <br />
        <TextField
         name="LastName"
          style={{ width: "200px", margin: "5px" }}
          type="text"
        //  label="Enter Your lastNames"
          variant="outlined"
          defaultValue = {LastName}
         
        />
        <br />
        <TextField
         name="UserName"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          //label="Enter your Username"
          variant="outlined"
         defaultValue = {UserName}
        />
        <br />
        <TextField
         name="Email"
          style={{ width: "200px", margin: "5px" }}
          type="text"
         // label="Enter your Email"
          variant="outlined"
          value = {Email}
        />
        <br />

        <br />
      
        <br />
        <Button variant="contained" color="primary" onLoad={max} type="submit">
          Update Details
        </Button>
      </form>
      
        
      <br />
       
        </div>
  );
}
