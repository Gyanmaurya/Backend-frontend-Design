 const express=require('express');
 const app=express();
 app.use(express.json())
 const connectDB=require('./config/db')
 
 const port=process.env.PORT || 5000
 
 const userController=require('./controller/user.controller.js');
 app.use('/user',userController)



 app.listen(port,async()=>{
     await connectDB()
    console.log(`Server running at ${port} .`)

 })