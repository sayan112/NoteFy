const express = require('express');
const {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
   deleteNote
} = require("../controllers/notesController");
const { protect } = require('../Middleware/authMiddleware');
 const router = express.Router();
 // for getting notes
 router.route('/').get(protect,getNotes);
   router.route("/create").post(createNote);
 router.route("/:id").get(getNoteById).put(protect,updateNote).delete(protect,deleteNote);
//put().delete();
  module.exports =router;