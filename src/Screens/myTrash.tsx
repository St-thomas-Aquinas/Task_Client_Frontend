//Import sections
import { Card, CardContent,Typography,Button,CardActionArea,Stack, CardActions} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

// End of Import sections

export default function AltCard1() {
  //Declaration of constants
  const [posts, setPosts] = useState(" ");
 // const _location = useLocation();
  const navigate = useNavigate();
  
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
        

        setPosts(data2);
      } catch (e) {
      } 
    }
    
    HandleRequest();
    
  }, []);

  return (
    <div className="app">
      <Stack spacing={2}>
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
