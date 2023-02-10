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
app.post('/studPage', function(req,res){
 var name = req.body.name;
 var roll =req.body.roll;
 var dept = req.body.dept;
 var room=req.body.room;
 var hostels=req.body.hostels;
 var feedback=req.body.feedback;
 var data = {
 "name": name,
 "roll":roll,
 "dept":dept,
 "room":room,
 "hostels":hostels,
 "feedback":feedback,
"status":"null",
 }
 db.collection('student').insertOne(data,function(err, collection){
    if (err) throw err;
    console.log("Student login successfull!!"); 
    return 'successfull';
   });
   return res.redirect('http://127.0.0.1:5501/studFinal.html');
});

app.put('/adminStatus',function(req,res){
   var x={roll:'20ISR012'}
   var newvalues = { $set: { status:'rectified' } };
   dbo.collection("student").updateOne( x, newvalues, function(err, res) {
     if (err) throw err;
     console.log("1 document updated");
     db.close();
   })
   return res.redirect('http://127.0.0.1:5501/studFinal.html');
});
  
   app.get('/',function(req,res){
 
   return res.redirect('studPage.html');
   }).listen(3001)
   console.log("server listening at port 3001");
