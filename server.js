const express=require("express")
const app=express()

app.get("/home",(req,res)=>{
    res.send("This is home page")
})

app.get("/about",(req,res)=>{
    res.send("This is about page")
})

app.get("/login",(req,res)=>{
    res.send("This is login page")
})

app.get("/signup",(req,res)=>{
    res.send("This is signup page")
})

app.get("/",(req,res)=>{
    res.send(`
        <a href="home">HOME</a>
        <a href="about">ABOUT</a>
        <a href="login">LOGIN</a>
        <a href="signup">SIGNUP</a>
        `)
})

app.listen(2009)
