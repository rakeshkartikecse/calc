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

app.post("/bmiCalculator",function(req,res)
{
    var height=parseFloat(req.body.height);
    var weight=parseFloat(req.body.weight);

    var bmi=weight/(height*height);

    res.send("The BMI of is " + bmi);
})

app.get("/calDivision",function(req,res)
{
    res.sendFile(__dirname + "/calDivision.html");
})

app.post("/calDivision",function(req,res)
{
    var height=Number(req.body.height);
    var weight=Number(req.body.weight);
    var d=height/weight;

    res.send("The division of the number is  " +d);
})

app.get("/todo",function(req,res){
    var today=new Date();
    var currentDay=today.getDay();

    if(currentDay==6 || currentDay==0)
    {
        res.send("Today is off day");

    }

    else{
        res.write("Today is working day");
       // res.sendFile(__dirname +"/index.html");
    }
})

app.listen(3000,function(){
    console.log("Hello world!");
});