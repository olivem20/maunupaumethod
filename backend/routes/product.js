const express = require('express');
const router = express.Router();

// Example product data (replace with a database later)
let products = [
  { id: 1, name: 'Private Tennis Lesson', price: 100 },
  { id: 2, name: 'Group Coaching Session', price: 50 },
];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

// Get a single product by ID
router.get('/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Add a new product
router.post('/', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update a product
router.put('/:id', (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Delete a product
router.delete('/:id', (req, res) => {
  products = products.filter((p) => p.id !== parseInt(req.params.id));
  res.status(204).send(); // No content
});

module.exports = router;
