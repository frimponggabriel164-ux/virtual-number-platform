const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post("/register", async(req,res)=>{
  const hash = await bcrypt.hash(req.body.password,10);
  const user = await User.create({email:req.body.email,password:hash});
  res.json(user);
});

router.post("/login", async(req,res)=>{
  const user = await User.findOne({email:req.body.email});
  if(!user) return res.json({msg:"not found"});
  const ok = await bcrypt.compare(req.body.password,user.password);
  if(!ok) return res.json({msg:"wrong"});
  const token = jwt.sign({id:user._id},"secret");
  res.json({token,user});
});

module.exports = router;
