const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const mongoose=require('mongoose');
dotenv.config({path:'config.env'})

//connect DB
mongoose.connect(process.env.DB_URL).then((conn)=>{
    console.log(`DataBase Connected:${conn.connection.host}`)
}).catch((err)=>{
    console.log(`DataBase Error ${err}`);
    process.exit(1)
})


//Express app
const app = express();
//Midddlewares

if(process.env.NODE_ENV==='developement'){
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`);
}


//create Schema
const categorySchema= new mongoose.Schema({
    name:String,
})

//Routes
app.get("/",(req,res)=>{
    res.send('first api ')
})
const PORT=process.env.PORT || 8000;
app.listen(PORT ,()=>{
    console.log(`server running on port ${PORT}`);
})    