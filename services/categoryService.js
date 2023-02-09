const CategoryModel=require('../models/categoryModel')
const slugify = require('slugify')
const asyncHandler = require('express-async-handler')

exports.getCategories=(req,res)=>{
   res.send();
};




exports.addCategories= asyncHandler( async(req,res)=>{
    const name=req.body.name;

        const category= await CategoryModel.create({name,slug:slugify(name)})
        res.status(201).json({data:category});

});





    //try catch
    // try {
    //     const category= await CategoryModel.create({name,slug:slugify(name)})
    //     res.status(201).json({data:category});
    // } catch(err){
    //     res.status(400).send(err)
    // }
   

    /////////promises way
    // const name=req.body.name;
    // CategoryModel.create({name,slug:slugify(name)})
    // .then(category=>res.status(201).json({data:category}))
    // .catch(err=>res.status(400).send(err))

    /////////// simple wayyy
    // const newCategory= new CategoryModel({name});
    // newCategory
    // .save()
    // .then((doc)=>{
    //     res.json(doc);
    // })
    // .catch((err)=>{
    //     res.json(err);
    // });
