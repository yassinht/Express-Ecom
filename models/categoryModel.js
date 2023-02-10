const mongoose=require('mongoose');
/**
 * @openapi
 * components:
 *   schema:
 *     Category:
 *       type: object
 *       required:
 *        - name
 */
//create Schema
const categorySchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"category required"],
        unique:[true,"category must be unique"],
        minlength:[3,"too short name"],
        maxlength:[32,"too long name"],
    },
    slug:{
        type:String,
        lowercase:true,
    },
    image:String,

},{timestamps:true});

//create model
const CategoryModel=mongoose.model('Category',categorySchema)
module.exports=CategoryModel;