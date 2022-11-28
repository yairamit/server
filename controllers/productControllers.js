const Product = require("../models/product");

exports.getAllProducts = async (req, res, next) => {
  try {
    const [products, _] = await Product.findAll();

    res.status(200).json({ count: products.length, products });
  } catch (error) {
    next(error);
  }
};

exports.createNewProduct = async (req, res, next) => {
  try {
    let { name,category,price } = req.body;
    let product = new Product(name,category,price);

    product = await product.save();

    res.status(201).json({ message: "product created" });
  } catch (error) {
    next(error);
  }
};

exports.getProductByName = async (req, res, next) => {
  try {
    let productName = req.params.Name;

    let [product, _] = await Product.findByName(productName);

    res.status(200).json({ product: product[0] });
  } catch (error) {
    next(error);
  }
};
