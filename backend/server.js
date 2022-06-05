const express = require("express");
const notes = require("./data/notes");
 const dotenv= require("dotenv");

 const connectDB=require("./config/db");
  const app = express();
dotenv.config();

connectDB();

const PORT= process.env.PORT || 4000 ;

  app.get("/",(req,res)=>{
      res.send("hey its running like a pussy lol op dope ");
  
  }
    );

 app.get ("/api/sayan/notes", (req,res)=>{
     res.send(notes);
 })



app.get("/api/sayan/notes/:id",(req,res)=>{

    const note = notes.find((n)=>n._id===req.params.id);
     res.send(note);
})

app.listen(PORT,  console.log(`hey server is startedop lol ${PORT}`));

