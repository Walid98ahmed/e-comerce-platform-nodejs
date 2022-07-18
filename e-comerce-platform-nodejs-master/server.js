const express = require("express");
const app = express();
 const connectDB = require("./backend/config/db")
 const dotenv = require("dotenv")
 const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./backend/routes/userRoutes");
const productRoutes = require("./backend/routes/productRoutes");
const orderRoutes  = require("./backend/routes/orderRoutes");
const uploadRoutes  = require("./backend/routes/uploadRoutes");

const  { notFound, errorHandler } = require("./backend/middleware/errorMiddleware") ;

dotenv.config();
connectDB();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
};

app.use(express.json());
    
 mongoose.Promise = global.Promise;

//  app.use(morgan("dev"));
//  app.use('/uploads', express.static("uploads"));
//  app.use(bodyParser.urlencoded({ extended: false }));
//  app.use(bodyParser.json());
 

// Middleware || all our endpoints will start require '/users'.
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/uploads", uploadRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(4000, ()=>{
  console.log('Server Running on port 4000')
});


