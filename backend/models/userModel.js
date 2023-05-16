 const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose = require("mongoose");
// import bcrypt from ("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png",
    },
  },
  {
    timestamps: true,
  }



);



// encription of our passwords 
userSchema.pre('save',async function(next)
{
    if( !this.isModified('password'))
    {
        next();
    }
     const salt= await bcrypt.genSalt(10);
     this.password=await bcrypt.hash(this.password,salt);

}
);

// match the password
 userSchema.methods.matchPassword= async function (enteredPassword) {
     return await bcrypt.compare(enteredPassword,this.password);
     
 };

const User = mongoose.model("User", userSchema);
module.exports = User;
