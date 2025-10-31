let express=   require('express');
const connectDB = require('./config/db');
let signUpRoute=require('./router/user')
let loginUpRoute=require('./router/login')
let forgetRouter=require('./router/forget')
let resetRouter=require('./router/reset')
let cors=   require('cors');


let app=  express()
app.use(cors());

connectDB()
app.use('/api',signUpRoute)
app.use('/api',loginUpRoute)
app.use('/api',forgetRouter) 
app.use('/api',resetRouter) 




app.listen(3000,()=>{
    console.log('server running 3000');
    
})