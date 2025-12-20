require("dotenv").config();
let express=   require('express');
const connectDB = require('./config/db');
let signUpRoute=require('./router/user')
let loginUpRoute=require('./router/login')
let forgetRouter=require('./router/forget')
let resetRouter=require('./router/reset')
let uploadRouter=require('./router/upload')
let likeRouter=require('./router/likecount')
let followRouter = require("./router/follow");
let searchRouter = require("./router/search");
let commentRouter = require("./router/comment");
let cors=   require('cors');

let app=  express()
app.use(
  cors({
    origin: "https://insta-clone-ochre.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB()
app.use('/api',signUpRoute)
app.use('/api',loginUpRoute)
app.use('/api',forgetRouter) 
app.use('/api',resetRouter) 
app.use('/api',uploadRouter)
app.use('/api',likeRouter)
app.use('/api', followRouter);
app.use('/api', searchRouter);
app.use('/api', commentRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on", PORT));

