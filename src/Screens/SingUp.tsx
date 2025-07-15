import "/src/App.css";
import {
  
  TextField,
  Button,
} from '@mui/material';


export default function App() {
  return (
    <div className="App" >

      <form onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
      const formvalues = Object.fromEntries(formData)
      alert(JSON.stringify(formvalues))
        fetch('https://blogit-server-9cb0.onrender.com/users',{
          method:"POST",
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
          label="Enter Your FirstName"
          variant="outlined"
          
        />
        <br />
        <TextField
         name="LastName"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter Your lastNames"
          variant="outlined"
         
        />
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
         name="Email"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter your Email"
          variant="outlined"
        />
        <br />
        <TextField
         name="Password"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Password"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Confirm Password"
          variant="outlined"
        />
        <br />
      
        <br />
        <Button variant="contained" color="primary" type="submit">
          Sing Up
        </Button>
      </form>
      
        
      <br /><Button variant="contained" color="primary" href="https://x.com">
          
        </Button>
       
        </div>
  );
}
