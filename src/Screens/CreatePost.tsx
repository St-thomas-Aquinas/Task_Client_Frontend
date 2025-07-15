import e from "express";
import "/src/App.css";
import {
Stack,
  TextField,
  Button,
} from '@mui/material';

import Singin from './Singin'
export default function App() {
let   UploadedImageURL: { url: string | Blob; }


let authorizationToken:any = localStorage.getItem("max");
if(authorizationToken == null){
 <Singin />
}
//function for handling images
  const handleimage = async (e:any) => {
    e.preventDefault()
    const file = e.target.files[0]

    if(!file) return

    const image = new FormData()
    image.append("file",file)
    image.append("upload_preset","blogit")
    image.append("cloud_name"," dbumhw2lf")

    const resCloudinary = await fetch(" https://api.cloudinary.com/v1_1/dbumhw2lf/image/upload",{
      method:"POST",
      body:image
    })
     UploadedImageURL = await resCloudinary.json()
    console.log(UploadedImageURL.url)

    
  }

  const handlecontent = async (e:any) => {
    e.preventDefault()
    const file = e.target.files[0]

    if(!file) return
    e.preventDefault()
    const Data = new FormData();
    
    const Title:any  = Data.get('Title')
    console.log("iam titile",Title)
    const synopsis:any  = Data.get('synopsis')
    const contents:any  = Data.get('synopsis')
    const postdata = new FormData()
    postdata.append("Title",Title)
    postdata.append("synopsis",synopsis)
    postdata.append("featureImage ",UploadedImageURL.url)
    postdata.append("contents",contents)

     console.log(Title)
    fetch('http://localhost:5000/posts',{
      method:"POST",
     headers:{"content-Type":"application/json"},
      body: JSON.stringify(postdata)
      
}).then(() =>{
alert("New user created")
})

    
  }

  return (
    <div className="App" >

      <form  name="form"onSubmit={(e) => {e.preventDefault()
 
    e.preventDefault()
    const Data = new FormData(e.currentTarget);
  const postdata ={
            Title: Data.get("Title"),
            synopisis:Data.get("synopsis"),
            featureImage: UploadedImageURL.url,
            contents: Data.get("contents"),
            authorId: 2
  }
  alert(JSON.stringify(postdata))
    fetch('https://blogit-server-9cb0.onrender.com/posts',{
      method:"POST",
     headers:{"content-Type":"application/json"},
      body: JSON.stringify(postdata)
      
}).then(() =>{
alert("New user created")
})}}>
        <TextField
          name="Title"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Enter Title"
          variant="outlined"
          
        />
        <br />
        <TextField
         name="synopsis"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Type a brief about"
          variant="outlined"
         
        />
        <br />
        <label>Upload you content</label>
        <br />
        <TextField
         name="contents"
          style={{ width: "200px", margin: "5px" }}
          type="text"
          variant="outlined"
        
          
        />
        <br />
        <label>Upload Feature Image</label>
        <br />
        <TextField
         name="featureimg"
          style={{ width: "200px", margin: "5px" }}
          type="file"
          variant="outlined"
          onChange={handleimage}
         
        />
        <br />
       
        <br />
      <Stack spacing={2} direction="row">
        <br />
        <Button variant="contained" color="primary" type="submit">
          POst Blog
        </Button>
        <br />
        <br />
        <Button variant="contained" color="primary" type="submit">
          Update Blog
        </Button>
        </Stack>
      </form>
      
        
      
       
        </div>
  );
}
