import { useState } from "react";
import "/src/App.css";
import {
  
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';



export default function App() {
    const navigate = useNavigate();
    const [_posts, setPosts] = useState(" ");
    
  //  const history = useHistory();
  return (
    <div className="App" >

      <form onSubmit={async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
       const formvalues = Object.fromEntries(formData)
alert(formvalues.UserName)
       const res = await fetch(`https://blogit-server-9cb0.onrender.com/${JSON.parse(JSON.stringify(formvalues.UserName))}`)
       const data = await res.json();
       const data2 = data.data
      
      localStorage.setItem("max", data2);

      //let authorizationToken:any = localStorage.getItem("max");

      //alert(JSON.stringify(authorizationToken))
async function max() {
  

      const resposts = await fetch(
        `http://localhost:5000/posts/${data2.user.Id}`
      );

      const datapost = await resposts.json();
      const datapost1 = datapost.data;
      const datapost2 = JSON.parse(JSON.stringify(datapost1));
      //alert(datapost2)
      setPosts(datapost2);
    
      }
      max()
      if(Boolean(res) == true){
        return navigate('/Home', { state:formData.get("UserName")});
       } }}>
       
        <br />
        <h3>Sing In</h3>
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
        <Link to="/SingUp">  <Typography gutterBottom variant="h5" component="div"  color="warning">
                  or Sing UP, if you do not have an account
                </Typography> </Link>
      </form>
      
      
       
        </div>
  );
}
