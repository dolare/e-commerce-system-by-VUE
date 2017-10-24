var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var Goods = require('../models/goods');

//connect database
mongoose.connect('mongodb://ecommerce-vue:129114l@ds021346.mlab.com:21346/mymongo')


mongoose.connection.on('connected', function () {
    console.log("mongoDB connected successfully");
});

mongoose.connection.on('error', function () {
    console.log('mongoDB connected fail')
});

router.get('/', function (req, res, next) {
    Goods.find({}, function (err, doc) {
        if(err){
            res.json({
                status: '1',
                msg: err.message
            });
        }else {
            res.json({
                status: '0',
                msg: '',
                result: {
                    count: doc.length,
                    list: doc
                }
            })
        }
    })
});

module.exports = router;
