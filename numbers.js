const router = require("express").Router();
const NumberModel = require("../models/Number");

router.get("/", async(req,res)=>{
  const data = await NumberModel.find({isSold:false});
  res.json(data);
});

router.post("/buy", async(req,res)=>{
  const n = await NumberModel.findById(req.body.numberId);
  n.isSold = true;
  await n.save();
  res.json({msg:"purchased"});
});

module.exports = router;
