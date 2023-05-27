const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
 const noteRoutes = require("./routes/noteRoute");
const { notFound, errorHandler } = require("./Middleware/erorMiddleware");
const cors =require("cors");
const app = express();
dotenv.config();
app.use(cors());
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hey its butter :) ");
});

 app.get ("/api/sayan/notes", (req,res)=>{
     res.send(notes);
 })

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use(notFound);
app.use(errorHandler);

// app.get("/api/sayan/notes/:id",(req,res)=>{

//     const note = notes.find((n)=>n._id===req.params.id);
//      res.send(note);
// })

const PORT = process.env.PORT || 6000;
app.listen(PORT, console.log(`hey server is startedop lol ${PORT}`));


