var express=require('express')
var hbs=require('hbs')
var app=express();
//const path=require(path);
//app.use('/static',express.static(path.join(__dirname,'public')));
 
app.set('view engine','hbs');
app.set('views','views');

//app.get('/',(req,res)=>{
//    res.render('file')
//})

app.get('/',(req,res)=>{
    res.render('file')
})
app.listen(3020)