import express from "express";
import Product from "../models/productModel";
import { getToken } from "../util";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    band: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });

  
router.put("/:id", async (req, res) => {
  const  prodId = req.params.id;
  const product = await Product.findById(prodId);
  if(product) {
    product.name= req.body.name;
    product.image= req.body.image;
    product.band= req.body.brand;
    product.price= req.body.price;
    product.category= req.body.category;
    product.countInStock= req.body.countInStock;
    product.description= req.body.description;
    product.rating= req.body.rating;
    product.numReviews= req.body.numReviews;

    const updatedProduct = await product.save();
    if (updatedProduct)
      return res
        .status(200)
        .send({ message: "New Product Updated", data: updatedProduct });

  }
  return res.status(500).send({ message: "Error in Updating Product" });
 
  
});

export default router;
