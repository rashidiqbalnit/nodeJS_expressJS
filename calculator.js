const express=require('express');
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
/*app.get("/",function(req,res){
     res.send("Hello World");
});  */
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){

    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("result of calculation is "+result);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res){

    var height=parseFloat(req.body.height);
    var weight=parseFloat(req.body.weight);
    var bmi=weight / (height*height);
    res.send("result of BMI is "+bmi);
});

app.listen(3000,function(){
    console.log("server is running on port 3000.");
});