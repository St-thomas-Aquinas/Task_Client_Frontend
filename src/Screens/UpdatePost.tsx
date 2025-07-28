//Import
import "/src/App.css";
import { Stack, TextField, Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
//End Of Import
let severity: any = "";

export default function App() {
  //Declaration of Constants and Varibles.
  const location = useLocation();
  const TaskId = location.state;
  alert(TaskId)
  const [Title, setTitle] = useState(" ");
  const [Description, setDescription] = useState(" ");
  const [Message, setmessage] = useState(" ");
  //End of Declaration of Constants and Varibles

  //Function to get the task using Task Id 
  useEffect(() => {
    async function HandleRequest() {
      try {
        const response = await fetch(
          `https://task-server-e7d3.onrender.com/Tasks/SpesificTask/${TaskId}`
        );

        const data = await response.json();
        const Title = JSON.parse(JSON.stringify(data.data.Title))
        const Description = JSON.parse(JSON.stringify(data.data.Description))

        setTitle(Title);
        setDescription(Description)
        alert(Description)
      } catch (e) {}
    }
    HandleRequest();
  });
   //End Function to get the task using Task Id 

  return (
    <div className="App">
      <form
        name="form"
        onSubmit={(e) => {
          e.preventDefault();

          const Data = new FormData(e.currentTarget);
          const postdata = {
            id:TaskId,
            Title: Data.get("Title"),
            Description: Data.get("Description"),
            
          };

          fetch(
            `https://task-server-e7d3.onrender.com/Tasks/update/${TaskId}`,
            {
              method: "PATCH",
              headers: { "content-Type": "application/json" },
              body: JSON.stringify(postdata),
            }
          )
            .then(() => {
              //Setting the error and success message

              severity = "success";
              setmessage("Your Have Succesfully Update Task");

              
            })
            .catch(() => {
              severity = "error";
              setmessage("Failed to Update Task");
            });
        }}
        //End of Setting the error and success message
      >


        <Alert severity={severity}>{Message}</Alert>
        <br />


        <Typography gutterBottom variant="h5" component="div">
          Title
        </Typography>


        <TextField
          name="Title"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          //label="Enter Title"
          variant="outlined"
          defaultValue={Title}
        />
        <br />


        <Typography gutterBottom variant="h5" component="div">
          Description
        </Typography>


        <TextField
          name="Description"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          // label="Type a brief about"
          variant="outlined"
          defaultValue={Description}
        />


        <br />
        <Stack spacing={2} direction="row">
          <br />

          <Button variant="contained" color="success" type="submit">
            Update
          </Button>

          <br />
          <FormControlLabel control={<Switch />} label="Mark AS Complete" onChange={function markComplete(){
              //Fetch request to set isDeleted to True
      fetch(`https://task-server-e7d3.onrender.com/Tasks/MarkCompletedTask/b6a87334-18d8-4585-ba1d-919b55c75149`, {
        method: "DELETE",
       //End of Fetch request to set isDeleted to True
       
      }).then(() => {})
    
          }} />
        </Stack>
      </form>
    </div>
  );
}
