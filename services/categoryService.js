const Category = require("../models/categoryModel");
const slugify = require("slugify");
const asyncHandler = require("express-async-handler");

exports.getCategories = asyncHandler(async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 5;
  const skip = (page - 1) * limit;
  const categories = await Category.find({}).skip(skip).limit(limit);

  res.status(200).json({ results: categories.length, page, data: categories });
});

exports.getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await Category.findById(id);
  if (!category) {
    res.status(404).json({ msg: `no category for this id ${id}` });
  }
  res.status(200).json({ data: category });
});

exports.addCategories = asyncHandler(async (req, res) => {
  const name = req.body.name;

  const category = await Category.create({ name, slug: slugify(name) });
  res.status(201).json({ data: category });
});

exports.updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const category = await Category.findOneAndUpdate(
    { _id: id },
    { name,slug: slugify(name) },
    { new: true }
  );
  if (!Category) {
    res.status(404).json({ msg: "no Category with thid id" });
  }
  res.status(200).json({ data: `Category updated ${category}` });
});


exports.deleteCategory=asyncHandler(async(req,res)=>{
    const {id}=req.params
    const category=await Category.findByIdAndDelete(id);
    if(!category){
        res.status(404).json({msg:'category not found'})
    }
    res.status(204).send();
})
//try catch
// try {
//     const category= await Category.create({name,slug:slugify(name)})
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
