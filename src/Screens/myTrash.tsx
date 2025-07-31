//Import sections
import { Card, CardContent,Typography,Button,CardActionArea,Stack, CardActions} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Navigation from '../Componets/Navigation';
import Alert from "@mui/material/Alert";
// End of Import sections
let severity: any = "";
export default function AltCard1() {
  //Declaration of constants
  const [posts, setPosts] = useState(" ");
 // const _location = useLocation();
  const navigate = useNavigate();
  const [_posts, _setPosts] = useState(" ");
  const [Message, setmessage] = useState(" ");
  
  //End of Declaration of constants

  const value = Cookies.get('name');
  //To ensure that the User Sing in first
if(!value){
  navigate('/Singin')
}

  useEffect(() => {
    async function HandleRequest() {

      try {
        
        const response = await fetch(
          `https://task-server-e7d3.onrender.com/Tasks/MyTrash/${value}`
        );

        const data = await response.json();
        const data2 = data.DeletedTasks;
          //End of Declaring Variable to get data from Form
          severity = "success";
          setmessage(
            "Loading Please wait...."
            
          );

        setPosts(data2);
        if(posts != null){
          severity = "success";
          setmessage(
            "Here is your Completed Tasks"
            
          );
        }
      } catch (e) {
      } 
    }
    
    HandleRequest();
    
  }, []);

  return (
    <div className="app">
      <Navigation/>
      <Stack spacing={2}>
      <Alert severity={severity}>{Message}</Alert>
      {Object.values(posts).map((_elem, index) => (
        <Card
          sx={{
            maxWidth: 345,
            position: "relative",
          }}
        >
          <Card sx={{ maxWidth: 345, position: "relative" }}>
            <CardActionArea>
             
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {JSON.parse(JSON.stringify(posts[index])).Title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {JSON.parse(JSON.stringify(posts[index])).Description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Stack spacing={10} direction="row">
              <Button size="small" color="success" variant="contained" onClick={ async function HandleRestore() {
      //Fetch request to set task for isDeleted to false
      fetch(`https://task-server-e7d3.onrender.com/Tasks/restore/${JSON.parse(JSON.stringify(posts[index])).id}`, {
        method: "Delete",
       
      }).then(() => { }); }}>
           Restore
               </Button>
              
              </Stack>
            </CardActions>
          </Card>
        </Card>
      ))}
      </Stack>
    </div>
  );
}
