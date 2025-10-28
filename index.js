const express=require('express');
const app=express()
const port=process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send('user server is avilable');

})
 const users=[
    
    {id:1,name:'Sabana',email:'sabana@gmail.com'},
    {id:1,name:'Sabnoor',email:'sabnoor@gmail.com'},
    {id:1,name:'Sabila',email:'sabila@gmail.com'},



 ]

 app.get('/user',(req,res)=>{
    res.send(users);

 })

app.listen(port,()=>{
    console.log(`user  server started on port :${port}`);
})