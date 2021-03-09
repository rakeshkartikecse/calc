//jshint esversion:6

const express= require('express');
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extends:true}));
app.get("/", function(request,response)
{
    response.sendFile(`${__dirname}/index.html`);
})

app.post("/",function(req,res)
{
    //res.send("Hi");
    var num1=(Number)(req.body.num1);
    var num2=(Number)(req.body.num2);
    var result=num1+num2;

    res.send("The sum of the number is "+ result);
})

app.get("/bmiCalculator", function(req,res)
{
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.listen(3000,function(){
    console.log("Hello world!");
});