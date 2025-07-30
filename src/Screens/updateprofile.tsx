//Declaration of Imports
import "/src/App.css";
import { Typography, TextField, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
// End of Declaration of Imports

//Global Variable used for setting servity
let severity: any = " ";
let UploadedImageURL: any = " "||null;

//Begining of App
export default function App() {
  //Declaration Of constasts and Variables
  const [Success, setsuccess] = useState(false);
  const [Message, setmessage]:any = useState(null);
  const [FirstName, setFirstName]:any = useState(null);
  const [LastName, setLastName]:any = useState(null);
  const [Email, setEmail]:any = useState(null);
  const [UserName, setUserName]:any = useState(null);
  const value = Cookies.get('name');
  //End Declaration Of constasts and Variables
  
  const navigate = useNavigate();
  if(!value){
    navigate('/Singin')
  }
  useEffect(() => {
    async function HandleRequest() {
      try {
        const response = await fetch(
          `https://task-server-e7d3.onrender.com/Users/MyProfile/${value}`
        );

        const data = await response.json();
        const data2 = data.User

        setFirstName(JSON.parse(JSON.stringify(data2.FirstName)))
        setLastName(JSON.parse(JSON.stringify(data2.LastName)))
        setEmail(JSON.parse(JSON.stringify(data2.Email)))
        setUserName(JSON.parse(JSON.stringify(data2.UserName)))

      } catch (e) {}
    }
    HandleRequest();
  });

  //function for handling images
  const handleimage = async (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (!file) return;

    const image = new FormData();
    image.append("file", file);
    image.append("upload_preset", "blogit");
    image.append("cloud_name", " dbumhw2lf");

    const resCloudinary = await fetch(
      " https://api.cloudinary.com/v1_1/dbumhw2lf/image/upload",
      {
        method: "POST",
        body: image,
      }
    );
    UploadedImageURL = await resCloudinary.json();
    console.log(UploadedImageURL.url);
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          //Prenting defualt Behaivor
          e.preventDefault
          //Prenting defualt Behaivor

          //Beging  of Post Request
          const Data = new FormData(e.currentTarget);
          const postdata = {
            FirstName: Data.get("FirstName"),
            LastName: Data.get("LastName"),
            Email: Data.get("Email"),
            UserName: Data.get("UserName"),
            Avatar: UploadedImageURL.url,
          };
          alert(JSON.stringify(postdata));
          fetch(`https://task-server-e7d3.onrender.com/Users/update/${value}`, {
            method: "PATCH",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(postdata)

          }).then(() => {
            setsuccess(true);
          });
          //End  of Post Request
          

          //Setting the error and success message and Redirecting the user to sing in page
          if (Success == true) {
            severity = "success";
            setmessage(
              "Your Have Succesfully Update a Task Master Account Details"
            );
          } else {
            severity = "error";
            setmessage("Failed to update a Task Master Account Details");
          }
        }
      }
      >
        <Typography gutterBottom variant="h5" component="div" color="primary">
          Update Account Profile Details
        </Typography>

        <Alert severity={severity}>{Message}</Alert>

        <Typography gutterBottom variant="h6" component="div" color="primary">
          FirstName
        </Typography>

        <TextField
          name="FirstName"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          variant="outlined"
          defaultValue={FirstName}
        />
        <br />

        <Typography gutterBottom variant="h6" component="div" color="primary">
          LastName
        </Typography>

        <TextField
          name="LastName"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          variant="outlined"
          defaultValue={LastName}
        />
        <br />

        <Typography gutterBottom variant="h6" component="div" color="primary">
          Email
        </Typography>

        <TextField
          name="Email"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          variant="outlined"
          value={Email}
        />
        <br />

        <Typography gutterBottom variant="h6" component="div" color="primary">
          UserName
        </Typography>

        <TextField
          name="UserName"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          variant="outlined"
          defaultValue={UserName}
        />

        <Typography gutterBottom variant="h6" component="div" color="primary">
          Upload a Profile Image
        </Typography>

        <TextField
          name="file"
          style={{ width: "200px", margin: "5px" }}
          type="file"
          variant="outlined"
          onChange={handleimage}
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Update Account Details
        </Button>
      </form>
    </div>
  );
}
