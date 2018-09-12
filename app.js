const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');

const mongoose  = require('./config/db');

const { Catgeory } = require('./models/category');
const { Product } = require('./models/product');
const { User } = require('./models/users');
const { Order } = require('./models/order');

const { categoryRouter } = require('./routes/categories');
const { productRouter } = require('./routes/products');
const { userRouter } = require('./routes/user');
const { orderRouter } = require('./routes/order');


const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());

//router middleware
app.use('/categories',categoryRouter);
app.use('/products',productRouter);
app.use('/users',userRouter);
app.use('/orders',orderRouter);

app.get('/',(req,res) => {
    res.send({
        notice : 'Welcome to e-commerce store'
    })
});

app.listen(port,() => {
    console.log('listening port',port);
})
