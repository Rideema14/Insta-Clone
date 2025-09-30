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
   res.send(data.toString())

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

//  app.patch("/edit",(req,res)=>{
//   let dataForEdit=   req.body
//         fs.appendFileSync("index.html",dataForEdit.msg)
//         res.send("file was updatededddddddddd")
//  })

 app.listen(4000,()=>{
  console.log("server running on port no 4000");
  
  
 })


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
app.listen(4000, () => {
  console.log("server running on port no 4000");

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