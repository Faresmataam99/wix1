const express = require('express');
const path = require ('path');


const app =express () ;
app.use(express.urlencoded({extended:true}));


app.get('/energy' ,(req,res) => {
    res.sendFile(path.join(__dirname,'soap','wix.html'))
});

app.get('/browse',(req,res)=>{
    res.sendFile(path.join(__dirname,'soap','blogs.html'))
});
app.get('/contact' , (req,res)=>{
    res.sendFile(path.join(__dirname,'soap','contact.html'))
})
app.post('/contact',(req,res)=>{
    console.log(req.body)
})
app.post ('/energy', (req,res)=> {
    console.log(req.body)
})
app.post('/browse', (req,res)=>{
    console.log(req.body)
})

app.listen(3000 , () => console.log('started server on http://localhost:3000'));










