const bcrypt = require('bcrypt')
let express= require("express")
 let app= express()
 let fs= require('fs')
 let cors=  require('cors')
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(cors())


 app.get('/',(req,res)=>{
  // res.send("hello")
  //  let data=   fs.readFileSync("index.html")
  //  res.send(data.toString())

 })
 app.post("/create",(req,res)=>{

     console.log(req.body);
    
  // fs.writeFileSyn =c("index.html",data.msg)
  res.send(req.body)

 })
 app.post("/login",(req,res)=>{

    let loginInfo=   req.body
  res.send(loginInfo)


 })


//  app.listen(4000,()=>{
//   console.log("server running on port no 4000");
  
  
//  })


//  http://localhost:5173 =>REACT
 
//  http://localhost:4000/create' BACKEND

//  cors  

const User= require('./user')
   let mongoose=    require("mongoose")
   mongoose.connect("mongodb://127.0.0.1:27017/instagram").then(()=>{
    console.log("db....");
    

   }).catch((err)=>{
    console.log(err);
    

   })
app.get('/', (req, res) => {
  res.send("hello")
})
  
app.post('/user', async(req,res)=>{
    
   let {name,email,passWord}= req.body 
const existingUser = await User.findOne({ email });
if (existingUser) {
    return res.send({ msg: "User already exists" });
}
else{
    let hashedP = await bcrypt.hash(passWord, 10);
console.log(hashedP);
let newUser = new User({
    name: name,
    email: email,
    passWord: hashedP
});
await newUser.save();
res.send({ msg: "User registered" });

}


})



app.post("/signUp",  async(req,res)=>{
       
       let {name,email,passWord}=      req.body
             
           const existingUser=      await  User.findOne({email})
           if(existingUser){
            return res.send({msg:"User already exists"})
           }
           else{
                  let hashedP=     await bcrypt.hash(passWord,10)
                  console.log(hashedP);
                 let newUser=     new User({
                    name:name,
                    email:email,
                    passWord:hashedP
                  })
                  await   newUser.save()
                  res.send({msg:"user registered"} )
                  
           }

})
app.post("/login", async(req,res)=>{

  let secretKey="JDNFNHIUWHFIWWIU"

  let {email,passWord}=req.body
        
           let user = await User.findOne({email})
           if(!user){
            return res.send({msg:"User not found"})
           }
           else{
            
               let isMatch = await bcrypt.compare(passWord,user.passWord)
               if(!isMatch){
                return res.send("Invalid credentials")
               }
              
              let token = jwt.sign({email:user.email,role:user.role},secretKey)
              console.log(token,"tokennn");
              
                   
               return res.send(token)

              //  return res.send("Login successfulyyyyy")

           }
})
const sendOtp = require('./twilioService'); // Twilio service to send OTP
// const Otp = require('./model/otp');
app.post('/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;


  const otp = Math.floor(100000 + Math.random() * 900000);

  try {
    await sendOtp(phoneNumber, otp);
    res.status(200).send({ message: 'OTP sent successfully', otp });
  } catch (error) {
    res.status(500).send({ error: 'Failed to send OTP' });
  }
});


// const connectDB = require('./config/db');
let signUpRoute=require('./router/user1')
let loginUpRoute=require('./router/login')
let forgetRouter=require('./router/forget')
let resetRouter=require('./router/reset')


// connectDB()
app.use('/api',signUpRoute)
app.use('/api',loginUpRoute)
app.use('/api',forgetRouter) 
app.use('/api',resetRouter) 




app.listen(4000,()=>{
    console.log('server running 4000');
    
})