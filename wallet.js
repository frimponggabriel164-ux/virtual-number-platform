const router = require("express").Router();
const User = require("../models/User");

const paymentMethods = [
  {provider:"MTN MoMo",number:"0546525869"},
  {provider:"Vodafone Cash",number:"0265197285"}
];

router.get("/methods",(req,res)=>{
  res.json(paymentMethods);
});

router.post("/deposit", async(req,res)=>{
  const {userId,amount} = req.body;
  await User.findByIdAndUpdate(userId,{$inc:{balance:amount}});
  res.json({msg:"deposit recorded"});
});

module.exports = router;
