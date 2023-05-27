const Note = require("../models/noteModel");
 const asyncHandler= require("express-async-handler");
let user;
  const getNotes = asyncHandler ( async(req, res)=>{
    user = req.user._id;
    console.log(req.user._id);
     const notes=await Note.find({ user: req.user._id });
      console.log(notes);
     res.json(notes);
  })

   const createNote = asyncHandler (async(req,res)=>{
  
     const {title,content,category}=req.body;
      if(!title || !content || !category)
      {
         res.status(400);
         throw new Error("Please Fill all the feilds");

      }
      else{

         const note = new Note({ user,title, content, category });
         console.log(note);
         const  createNote=await note.save();
          res.status(201).json(createNote);


      }
    

   })


    const getNoteById =asyncHandler(async(req,res)=>{
       const note = await Note.findById(req.params.id);
        if(note)
        {
         res.json(note);
        }
        else{
          res.status(404).json({message:"Note not found"});
        }
    }

    )
     const updateNote = asyncHandler(async(req, res)=>{
         user = req.user._id;
      const {title,content , category}=req.body;
      const note = await Note.findById(req.params.id);
      //  console.log(note.user);
      //   console.log(user);
      // auth is required
       if (note.user.toString() !== user.toString()) {
         res.status(401);
         throw new Error(
           "You cannot perform this action , we are not allowed to 🤡"
         );
       }
       if(note)
       {
          note.title= title;
          note.content = content;
          note.category = category;
       const updateNote = await note.save();
       res.json(updateNote);

         }
         else{
             res.status(404);
              throw new Error("Nothing found in note , we are sorry :(");
                      }
     })
     



      const deleteNote = asyncHandler(async(req,res)=>{

          const need =req.params.id;
           console.log(need);
          const note = await Note.findById(need);
           if (note.user.toString() !== req.user._id.toString()) {
             res.status(401);
             throw new Error(
               "You cannot perform this action , we are not allowed to 🤡"
             );
           }   
          console.log(note);
            if(note)
            {
                await note.remove();
                res.json({message:"Note Remove"});
            }
            else{
                  res.status(404);
                  throw new Error("Nothing found in note , we are sorry :(");
            }

      })
   module.exports = {
     getNotes,
     createNote,
     getNoteById,
     updateNote,
     deleteNote,
   };