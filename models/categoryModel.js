const mongoose=require('mongoose');

//create Schema
const categorySchema= new mongoose.Schema({
    name:String,
});

//create model
const CategoryModel=mongoose.model('Category',categorySchema)
module.exports=CategoryModel;