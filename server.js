const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const mongoose=require('mongoose');
const dbConnection=require("./config/database");
const categoryRoute=require('./routes/categoryRoute')
dotenv.config({path:'config.env'})

//connect db
dbConnection()
//Express app
const app = express();
//Midddlewares
app.use(express.json());
if(process.env.NODE_ENV==='developement'){
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`);
}

//Mount routes
app.use("/api/v1/categories",categoryRoute)

const PORT=process.env.PORT || 8000;

app.listen(PORT ,()=>{
    console.log(`server running on port ${PORT}`);
})     