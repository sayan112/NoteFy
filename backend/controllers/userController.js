const asyncHandeler= require("express-async-handler");
const User= require("../models/userModel");
const generateToken = require("../utils/userGenerateToken");


const registerUser= asyncHandeler(  async(req,res)=>{
    const {name , email,password,pic}=req.body;   // we are requesting from user 
   
   const userExists= await User.findOne({email});
    if(userExists)
    {
        res.status(400);
        throw new Error("User Already Exists");
    }
    const user = await User.create ({
        name,
        email,
        password,
        pic,


    });
    if(user)
    {
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token:generateToken(user._id)

        });
    }
    else{
        res.status(400);
        throw new Error("Eror occured ! ");
    }
    

   // here we are displaying all things 
    // res.json({
    //     name,email,
    // });

});
const authUser = asyncHandeler(async (req, res) => {
  const { name, email, password, pic } = req.body; // we are requesting from user
  const user = await User.findOne({email}); 
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id)
    }); 
}
else{
    res.status(400);
    throw new Error("Invalid Email or Password");
     
}
});
module.exports = { registerUser, authUser };