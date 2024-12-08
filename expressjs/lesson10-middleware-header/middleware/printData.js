const printData = (req,res,next)=>{
     res.header("test",req.body.title);
     console.log(req);
     
     next()
}

export default printData;