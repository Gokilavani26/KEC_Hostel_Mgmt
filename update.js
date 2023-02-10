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

app.put('/adminFinal',function(req,res){
   var x={roll:'20ISR012'};
   var newvalues = { $set: { status:'rectified' } };
   dbo.collection("student").updateOne( x, newvalues, function(err, res) {
     if (err) throw err;
     console.log("1 document updated");
     db.close();
   })
});
  
   app.get('/',function(req,res){
 
   return res.redirect('studPage.html');
   }).listen(3003)
   console.log("server listening at port 3003");
