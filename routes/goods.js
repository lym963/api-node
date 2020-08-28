const express = require('express');
const request = require('request');
const router = express.Router();

/* GET users listing. */
router.get('/index', function(req, res, next) {
    request('http://local.shop1.com/api/goods/index', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body) // 请求成功的处理逻辑
        }
    });
});
router.get('/detail', function(req, res, next) {
    var requestData=req.query;
    request('http://local.shop1.com/api/goods/detail?id='+requestData.id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body) // 请求成功的处理逻辑
        }
    });
});

module.exports = router;
