const bcrypt = require("bcrypt");
const User = require("../modals/User");
const Product = require("../modals/product");
const jwt = require("jsonwebtoken");
const admin = {
  register: async (req, res) => {
    try {
      const { firstName, lastName, email, password, role } = req.body;

      // Check if user with the given email already exists
      const existingUser = await User.findOne({ email });

      if (existingUser && existingUser.verified) {
        return res.status(400).json({
          status: "error",
          message: "User already registered. Please Login.",
        });
      }

      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role,
      });

      // Return a success response
      return res.status(201).json({
        status: "success",
        message: "User successfully registered.",
      });
    } catch (err) {
      return res.status(400).json({ status: "error", message: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find the user by email
      const user = await User.findOne({ email });

      // Check if the user exists and is verified
      if (!user) {
        return res.status(401).json({
          status: "error",
          message: "Invalid credentials. Please check your email and password.",
        });
      }

      // Check if the provided password matches the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({
          status: "error",
          message: "Invalid credentials. Please check your email and password.",
        });
      }

      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      // Return the token in the response
      return res.status(200).json({
        status: "success",
        message: "Login successful.",
        token,
      });
    } catch (err) {
      return res.status(400).json({ status: "error", message: err.message });
    }
  },
  addProduct: async (req, res) => {
    try {
      const { name, description, price, userId } = req.body;

      const newProduct = new Product({
        name,
        description,
        price,
        userId,
      });
      console.log(req.body, "ppppppppppp");
      // Save the product to the database
      const savedProduct = await newProduct.save();

      res.status(201).json({
        status: "success",
        message: "Product added successfully.",
        product: savedProduct,
      });
    } catch (err) {
      res.status(400).json({ status: "error", message: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      // Extract token from Authorization header
      const token = req.header('Authorization');
  
      if (!token) {
        return res.status(401).json({ status: 'error', message: 'Unauthorized: Missing token.' });
      }
  
      try {
        // Verify and decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
        // Access user ID from the decoded token
        const userId = decoded.userId;
  
        // Find the user by ID or any other criteria you use in your system
        const user = await User.findById(userId).select("-password");
  
        if (!user) {
          return res.status(404).json({
            status: 'error',
            message: 'User not found.',
          });
        }
  
        res.status(200).json({
          status: 'success',
          user: user,
        });
      } catch (err) {
        return res.status(401).json({ status: 'error', message: 'Unauthorized: Invalid token.' });
      }
    } catch (err) {
      res.status(400).json({ status: 'error', message: err.message });
    }
  },
  editProduct: async (req, res) => {
    try {
      const { name, description, price } = req.body;
      const productId = req.params.productId;
  
      // Find the product by ID
      const existingProduct = await Product.findById(productId);
  
      if (!existingProduct) {
        return res.status(404).json({
          status: 'error',
          message: 'Product not found.',
        });
      }
  
      // Update product details
      existingProduct.name = name;
      existingProduct.description = description;
      existingProduct.price = price;
  
      // Save the updated product to the database
      const updatedProduct = await existingProduct.save();
  
      res.status(200).json({
        status: 'success',
        message: 'Product updated successfully.',
        product: updatedProduct,
      });
    } catch (err) {
      res.status(400).json({ status: 'error', message: err.message });
    }
  },
  getProduct: async (req, res) => {
    try {
      const productId = req.params.productId;
  
      // Find the product by ID
      const product = await Product.findById(productId);
  
      if (!product) {
        return res.status(404).json({
          status: 'error',
          message: 'Product not found.',
        });
      }
  
      res.status(200).json({
        status: 'success',
        product: product,
      });
    } catch (err) {
      res.status(400).json({ status: 'error', message: err.message });
    }
  },
  getAllProduct: async (req, res) => {
    try {
      // Find all products
      const products = await Product.find();
  
      res.status(200).json({
        status: 'success',
        products: products,
      });
    } catch (err) {
      res.status(400).json({ status: 'error', message: err.message });
    }
  }

};

module.exports = admin;
