const express = require('express');

const { Order } = require('../models/order');

const router = express.Router();

// router.get('/',(req,res) => {
//     res.send({
//         notice : 'welcome to order router'
//     })
// })

module.exports = {
    orderRouter : router
}