module.exports= (req,res,next)=>{
  let requestTime = new Date();
  req.timeStamp = requestTime;
  next();
};