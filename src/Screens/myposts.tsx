import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  CardMedia 
} from "@mui/material";
import { Link } from 'react-router-dom';
import Singin from './Singin'
import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
export default function AltCard1() {

  let authorizationToken:any = localStorage.getItem("max");
 if(authorizationToken == null){
  <Singin />
 }


  const location = useLocation();
   const username = JSON.parse(JSON.stringify(location.state))

  const [myposts, setmyposts] = useState(" ");
  const [_loading, setloading] = useState(true);
  
  useEffect(() => { 
    async function HandleRequest() {
     
      setloading(true);
      try {
        const response = await fetch(`http://localhost:5000/users/maxkuria`);
        
        const data = await response.json();
        const data2 = data.data.user.Id
        const data3 = JSON.stringify(data2)
        alert("coming next is posts")

        const resposts = await fetch(`http://localhost:5000/posts/${data3}`);
        
        const datapost = await resposts.json();
        const datapost2 = datapost.data
        const datapost3 = JSON.stringify(datapost2)
       alert(datapost3)
        setmyposts(datapost3);
      } catch (e) {
  
      } finally {
        setloading(false);
      }
    }
HandleRequest();
  }, []);
  

  return (
    <div className="app">
     {  Object.values(myposts).map((elem,index) => (
       
        <Card
         sx={{
          maxWidth: 345,
          position: "relative",
          
         }}
         >
         <Card sx={{ maxWidth: 345, position: "relative" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={elem}           
              
            />
        
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               { JSON.parse(JSON.stringify(myposts[index])).Title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
              { JSON.parse(JSON.stringify(myposts[index])).synopisis}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
          
          <Link to="/CreatePost">See full blog</Link>
        
            </Button>
            <Button size="small" color="primary">
          
      Delete
    </Button>
          </CardActions>
         </Card>
         </Card>
         ))}
         
    </div>
  );
}