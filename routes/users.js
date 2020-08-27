var express = require('express');
var router = express.Router();
var request= require("request");

/* POST users login. */
router.post('/login', function(req, res, next) {
    var url="http://passport.shop1.com/api/login";
    var requestData=req.body;
    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        //body: JSON.stringify(requestData)
        body: requestData
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
             // 请求成功的处理逻辑
            res.send(body)
        }
    });
});
/* POST users reg. */
router.post('/reg', function(req, res, next) {

    var url="http://passport.shop1.com/api/reg";
    var requestData=req.body;

    request({
        url: url,
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        //body: JSON.stringify(requestData)
        body: requestData
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            // 请求成功的处理逻辑
            console.log(body)
            res.send(body)
        }
    });
});

module.exports = router;
