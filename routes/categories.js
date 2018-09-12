const express = require('express');
const { Category } = require('../models/category');

const _ = require('lodash');

const router = express.Router();

    // router.get('/',(req,res) => {
    //     res.send({
    //         notice : 'Welcome to category routes'
    //     })
    // })
    router.get('/',(req,res) => {
        Category.find()
        .then((categories) => {
            res.send(categories);
        }) .catch((err) => {
            res.send(err);
        })
    });


    router.post('/',(req,res) => {
        let body = _.pick(req.body,['name']);
        let category = new Category(body);
        category.save()
        .then((category) => {
            res.send(category);
        }) .catch((err) => {
            res.send(err);
        })
    });

module.exports = {
    categoryRouter : router
}