//Import
import "/src/App.css";
import { Stack, TextField, Button } from "@mui/material";
import { useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useState } from "react";
//End Of Import
let severity: any = "";

export default function App() {
  const location = useLocation();
  const UserName = location.state;
  const [_posts, _setPosts] = useState(" ");
  const [Message, setmessage] = useState(" ");

  return (
    <div className="App">
      <form
        name="form"
        onSubmit={(e) => {
          e.preventDefault();

          const Data = new FormData(e.currentTarget);
          const postdata = {
            Title: Data.get("Title"),
            Description: Data.get("Description"),
            UserName: UserName,
          };

          fetch("https://task-server-e7d3.onrender.com/Tasks", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(postdata),
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

        <TextField
          name="Title"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter Title"
          variant="outlined"
        />
        <br />
        <TextField
          name="Description"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Type a brief about"
          variant="outlined"
        />
        <br />

        <br />
        <Stack spacing={2} direction="row">
          <br />
          <Button variant="contained" color="primary" type="submit">
            Create Task
          </Button>
          <br />
        </Stack>
      </form>
    </div>
  );
}
