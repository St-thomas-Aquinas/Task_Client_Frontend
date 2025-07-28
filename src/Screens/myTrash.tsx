//Import sections
import { Card, CardContent,Typography,Button,CardActionArea,Stack, CardActions} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// End of Import sections

export default function AltCard1() {
  //Declaration of constants
  const [posts, setPosts] = useState(" ");
  const location = useLocation();
  const UserName = location.state;
  //End of Declaration of constants

  useEffect(() => {
    async function HandleRequest() {

      try {
        
        const response = await fetch(
          `https://task-server-e7d3.onrender.com/Tasks/Trash/${UserName}`
        );

        const data = await response.json();
        const data2 = data.data;
        

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
      fetch(`https://task-server-e7d3.onrender.com/Tasks/re/${JSON.parse(JSON.stringify(posts[index])).id}`, {
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
