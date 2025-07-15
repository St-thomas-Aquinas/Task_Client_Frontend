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

  import React, { useState, useEffect } from "react";

  export default function AltCard1() {
    
    const [posts, setPosts] = useState(" ");
    const [_loading, setloading] = useState(true);
    
    useEffect(() => { 
      async function HandleRequest() {
       
        setloading(true);
        try {
          const response = await fetch(`http://localhost:5000/posts`);
          
          const data = await response.json();
          const data2 = data.data
         
          setPosts(data2);
        } catch (e) {
    
        } finally {
          setloading(false);
        }
      }
  HandleRequest();
    }, []);
    
  
    return (
      <div className="app">
       {  Object.values(posts).map((elem,index) => (
         
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
                image={ JSON.parse(JSON.stringify(posts[index])).featureImage}           
                
              />
          
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 { JSON.parse(JSON.stringify(posts[index])).Title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                { JSON.parse(JSON.stringify(posts[index])).synopisis}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
            
            <Link to="/CreatePost">See full blog</Link>
          
              </Button>
              <Button size="small" color="primary">
              <Link to="/Readmore" state={{ fromHome:JSON.stringify(posts[index])}}>
        ReadMore
      </Link></Button>
            </CardActions>
           </Card>
           </Card>
           ))}
           
      </div>
    );
  }