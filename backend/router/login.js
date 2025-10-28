const User = require("../models/userModel");
const router = require("./user");
let jwt =require('jsonwebtoken')
let bcrypt=require('bcryptjs')
router.post('/login', async(req,res)=>{
    let loginData=req.body
     let data=    await User.findOne({email:loginData.email})
     console.log(data,"datata");
     
     if(data){
                 let validPass=     await bcrypt.compare(loginData.passWord,data.passWord)
                 if(validPass){
                       let token=   jwt.sign({email:data.email,role:data.role},'jdsbfiuwhfiuwhfwuif',{expiresIn:'1h'})
                       console.log(token);
                       
                   return res.status(200).send(token)
                 }
                 else{
                    res.send('InvalidPssssss')
                 }
     }
     else{
        res.send('pahle account create kroooo')
     }


}
)

module.exports=router