var express = require('express');
var app = express();
var bodyParser=require('body-parser');//中间件，解析post请求发送的数据，需要安装模块 npm s body-parser
var db=require('./mysql');//模块化mysql操作
app.use(bodyParser.urlencoded({extended:true}));

app.all('*',function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/*//mysql模块测试
var data=[{name:"红A"},{data:123321}];
var sql='INSERT INTO userinfo(openid,answer,times,datetime) VALUES("qers2feg","裂空","2","1991")';
db.query(sql,function(err, rows, fields){
    if(err){
        console.log(err);
        return;
    }
    console.log(rows);
});*/

//发送数据,客户端请求http://localhost:3000/dd
app.get('/dd',function(req,res){
    res.status(200),
    res.json(data);
});

//接收数据 post方式,客户端请求http://localhost:3000/post
app.post('/post',function(req,res){
    var data=req.body;//全部数据，json格式
    console.log(data.username);//json中的单个字段
    console.log(data.password);
    console.log(data);
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
});
