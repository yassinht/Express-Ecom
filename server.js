const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const mongoose=require('mongoose');
const dbConnection=require("./config/database");
const categoryRoute=require('./routes/categoryRoute')
const swaggerJsDoc=require('swagger-jsdoc');
const swaggerUI =require('swagger-ui-express')
dotenv.config({path:'config.env'})
//Express app
const app = express();
app.use(express.json());

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Library API",
			version: "1.0.0",
			description: "A simple Express Library API",
		},
		servers: [
			{
				url: "http://localhost:8000",
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(specs));




//connect db
dbConnection()

//Midddlewares
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