//封装mysql
var db={};
var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'ltn'
});

connection.connect();

db.query=function(sql,callback){
    if(!sql){
        callback();
        return;
    }
    connection.query(sql,function(err, result){
        if(err){
            console.log(err);
            callback(err,null);
            return;
        }
        callback(null,result);
    });
}
module.exports = db;

/*//增
var nowDate=new Date();
console.log(nowDate);
var  userAddSql = 'INSERT INTO userinfo(openid,answer,times,datetime) VALUES(?,?,?,?)';
var  userAddSql_Params = ['qers2feadfeg', '你是谁',2,nowDate];
connection.query(userAddSql,userAddSql_Params,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }
    console.log('-------INSERT----------');
    console.log('INSERT ID:',result);
    console.log('#######################');
});*/

/*//改
var userModSql = 'UPDATE userinfo SET answer = ?,times = ? WHERE id = ?';
var userModSql_Params = ['Hello World',99,3];
connection.query(userModSql,userModSql_Params,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
    console.log('----------UPDATE-------------');
    console.log('UPDATE affectedRows',result.affectedRows);
    console.log('******************************');
});
connection.end();*/

/*//查
var  userGetSql = 'SELECT * FROM userinfo';
connection.query(userGetSql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }
    console.log('---------------SELECT----------------');
    console.log(result);
    console.log(result[0].id);
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
});
connection.end();*/

/*
//删
var  userDelSql = 'DELETE FROM userinfo WHERE id = 3';
connection.query(userDelSql,function (err, result) {
    if(err){
        console.log('[DELETE ERROR] - ',err.message);
        return;
    }
    console.log('-------------DELETE--------------');
    console.log('DELETE affectedRows',result.affectedRows);
    console.log('&&&&&&&&&&&&&&&&&');
});
connection.end();*/
