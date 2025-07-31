//import sections
import { Card, CardContent,Typography,Button,CardActionArea,Stack, CardActions} from "@mui/material";
import {   useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Navigation from '../Componets/Navigation';
//End Of import sections
export default function AltCard1() {
  //Declarations of Constants
  const [posts, setPosts] = useState(" ");
  const [_loading, setloading] = useState(true);
 // const location = useLocation();
  //const UserName = location.state;
  const navigate = useNavigate();
  

   //End of Declarations of Constants
// Get a cookie
const value = Cookies.get('name');

//To ensure that the User Sing in first
if(!value){
    navigate('/Singin')
}


//Function to fetch task
  useEffect(() => {
    async function HandleRequest() {
      setloading(true);
      try {
       
        const response = await fetch(
          `https://task-server-e7d3.onrender.com/Tasks/MyTasks/${value}`
        );

        const data = await response.json();
        const data2 = data.Tasks;
        
        
        setPosts(data2);
      } catch (e) {
      } finally {
        setloading(false);
      }
    }
    
    HandleRequest();
    
  }, []);
//End of  Function to fetch task.
  return (
    <div className="app">
       <Navigation/>
      <Typography gutterBottom variant="h6" component="div" color="primary">
          How are you feeling?, Here are Doc John Baptista Recomendations
        </Typography>

      <Stack spacing={2} >
      {Object.values(posts).map((_elem, index) => (
        <Card
          sx={{
            maxWidth: "100%",
            position: "relative",
          }}
        >
          <Card sx={{ maxWidth:1, position: "relative" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {JSON.parse(JSON.stringify(posts[index])).Title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {JSON.parse(JSON.stringify(posts[index])).Description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>

            <Stack spacing={20} direction="row">
              <Button size="small" color="error" variant="contained" onClick={ async function HandleDelete() {
      //Fetch request to set isDeleted to True
      fetch(`https://task-server-e7d3.onrender.com/Tasks/delete/${JSON.parse(JSON.stringify(posts[index])).id}`, {
        method: "DELETE",
       //End of Fetch request to set isDeleted to True
       
      }).then(() => {})
    }}>
              Delete
              </Button>

              <Button size="small" color="primary" variant="contained" onClick={  function updatePage(){
    navigate('/updateTask',{state:JSON.parse(JSON.stringify(posts[index])).id})
  }}>
  Update
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
