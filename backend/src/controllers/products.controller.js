import Products from "../models/Products"

export const createProduct = async (req,res) => {
    const {name,categoria,precio,stock,imgUrl} = req.body
    console.log (req.body)
  const newProduct = new Products({name,categoria,precio,stock,imgUrl});
  
  const productSave = await newProduct.save()

  res.status(201).json(productSave)
}
export const getProducts = async (req,res) => {
  const products = await Products.find();
  res.json(products)
  }

export const getProductById = async (req,res) => {
  const productid = await Products.findById(req.params.productId);
  res.status(200).json(productid);
}
export const updateProductById = async (req,res) => {

  const updateProduct = await Products.findByIdAndUpdate(req.params.productId,req.body,{
    new : true
  })
  res.status(200).json(updateProduct);
}
export const deleteProductById = async (req,res) => {


  await Products.findByIdAndDelete(req.params.productId);

  res.status(204).json();
}