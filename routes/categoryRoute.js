const express=require('express');
const {getCategories,addCategories}=require("../services/categoryService");
const router=express.Router();

router.route("/").get(addCategories).post(addCategories);

module.exports =router;