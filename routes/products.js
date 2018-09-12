const express = require('express');
const _ = require('lodash');
const { Product } = require('../models/product');

const router = express.Router();

// router.get('/',(req,res) => {
//     res.send({
//         notice : 'Welcome to product router'
//     })
// })
    router.get('/',(req,res) => {
        Product.find()
        .then((products) => {
            res.send(products);
        })
        .catch((err) => {
            res.send(err);
        })
    });

    router.post('/',(req,res) => {
        let body = _.pick(req.body,['name','price','description','category','codEligible','stock']);
        let product = new Product(body);
        product.save()
        .then((product) => {
            res.send(product);
        }) .catch((err) => {
            // res.send(err);
            console.log(err);
        })
    })


module.exports = {
    productRouter : router
}