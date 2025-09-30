let mongoose=  require("mongoose")
let userSchema=  new mongoose.Schema({
    name:String,
    email:String,
    passWord:String
})

 let User=      mongoose.model("User",userSchema)

 module.exports=User