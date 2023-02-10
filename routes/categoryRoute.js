const express=require('express');
const {getCategories,addCategories,getCategory,updateCategory,deleteCategory}=require("../services/categoryService");
const router=express.Router();




/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The book title
 *       example:
 *         name: The New Turing Omnibus
 */

 /**
  * @swagger
  * tags:
  *   name: Categories
  *   description: The Categories managing API
  */

/**
 * @swagger
 * /getCategories:
 *   get:
 *     summary: Returns the list of all the Categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: The list of the Categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Categories'
 */

router.route("/").get(getCategories);
/**
 * @swagger
 * /addcategory:
 *   post:
 *     summary: Create a new Category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
   *             $ref: '#/components/schemas/CreateUserResponse'
 *       500:
 *         description: Some server error
 */
router.route("/addcategory").post(addCategories)
router.route("/:id").get(getCategory).put(updateCategory).delete(deleteCategory)
module.exports =router;