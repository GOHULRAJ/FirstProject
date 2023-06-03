var express =require ('express')
var hbs=require('hbs')
var app=express();

app.set('view engine','hbs');
app.set('views','views');
app.get('/',(req,res)=>{
    res.render('file')
})
app.listen(3000)