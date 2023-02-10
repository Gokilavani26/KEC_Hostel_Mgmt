var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
const res = require("express/lib/response");
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/hostel', { useNewUrlParser: true });
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
console.log("connection succeeded");})
var app=express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
 extended: true
}));
app.post('/adminPage', function(req,res){
 var name = req.body.name;
 var email =req.body.email;
 var password = req.body.password;
 var data = {
 "name": name,
 "email":email,
 "password":password,
 }
 db.collection('admin').insertOne(data,function(err, collection){
    if (err) throw err;
    console.log("Admin login successfull!!"); 
    return 'successfull';
   });
   return res.redirect('http://127.0.0.1:5500/adminFinal.html');

})
app.post('/adminPage', function(req,res){
 var name = req.body.name;
 var email =req.body.email;
 var password = req.body.password;
 var data = {
 "name": name,
 "email":email,
 "password":password,
 }
 db.collection('admin').insertOne(data,function(err, collection){
    if (err) throw err;
    console.log("Admin login successfull!!"); 
    return 'successfull';
   });
   return res.redirect('http://127.0.0.1:5500/adminFinal.html');
   
})
app.get('/',function(req,res){

return res.redirect('adminPage.html');
}).listen(3002)
console.log("server listening at port 3002");


