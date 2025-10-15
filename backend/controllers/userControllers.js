import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

const createUser = asyncHandler(async(req,res) =>{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400).send("please fill the all the inputs fields.");
        return ;
    }
    const existingUser = await User.findOne({email});

    if(existingUser){
        res.status(401)
        throw Error("User Already exits.");
        return ;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password,salt);
    const newUser = new User({username,email,password: hashedpassword});

    try {
      const createUser = await newUser.save();
      generateToken(res, createUser._id);

      res.status(201).json({
        _id: createUser._id,
        username: createUser.username,
        email: createUser.email,
        password: createUser.password,
        isAdmin: createUser.isAdmin
      }); 
    } catch (error) {
       res.status(404);
       throw new Error("Invalid User credentials");
    }

});

const loginUser = asyncHandler(async(req,res) =>{
       const {email,password} = req.body;

       const existingUser = await User.findOne({email});
       if(existingUser){
          const isPasswordValid = await bcrypt.compare(password,existingUser.password);

          if(isPasswordValid){
            try {
              generateToken(res, existingUser._id);

              res.status(201).json({
                _id: existingUser._id,
                username: existingUser.username,
                email: existingUser.email,
                password: existingUser.password,
                isAdmin: existingUser.isAdmin
              });
              return;
            }catch(error) {
                res.status(401)
                throw new Error("Invalid User credential");
            }
          
          }else{
            res.status(401).send("Invalid User credential.")
          }
       }else{
          res.status(400).send("Invalid User credentials.")
       }
});

const logoutCurrentUser = asyncHandler(async(req,res) =>{
  res.cookie("jwt"," ", {
    httpOnly:true,
    expires: new Date(0)
  });

  res.status(200).json({
    message: "User logout successfully."
  })
});

const getAllUsers = asyncHandler(async(req,res) =>{
  const allUsers = await User.find({});
  res.status(201).json({allUsers});
});

const currentUserProfile = asyncHandler(async(req,res) =>{
  const user = await User.findById(req.user._id);

  if(user){
    try {
      res.status(201).json({user});
    } catch (error) {
      res.status(401);
      throw new Error("Invalid User Credential.")
    }
  }else{
    res.status(404).send("User not Found.");
  }
});

const updateCurrentUser = asyncHandler(async(req,res) =>{
  const currentUser = await User.findById(req.user._id);

  if(currentUser){
    try {
      currentUser.username = req.body.username||currentUser.username;
      currentUser.email = req.body.email||currentUser.email;
      if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(req.body.password,salt);
        currentUser.password = hashedpassword;
      };
      await currentUser.save();
      res.status(201).json({currentUser});
    }catch (error) {
      res.status(401);
      throw new Error("Invalid User credential.")
    }
  }else{
    res.status(404).send("User not found.")
  }
})

export {createUser,loginUser,logoutCurrentUser,getAllUsers,currentUserProfile,updateCurrentUser}