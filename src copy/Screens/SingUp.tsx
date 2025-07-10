import "/src/App.css";
import {
  
  TextField,
  Button,
} from '@mui/material';

export default function App() {
  return (
    <div className="App" >

      <form >
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter Your Full Names"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter your Email"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter your Phone Number"
          variant="outlined"
        />
        <br />
        <TextField
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
        <Button variant="contained" color="primary">
          Sing Up
        </Button>
      </form>
      
        
      <br /><Button variant="contained" color="primary" href="https://.com">
          sing In
        </Button>
       
        </div>
  );
}
