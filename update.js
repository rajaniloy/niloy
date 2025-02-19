const fs=require("fs")
const path=require("path")
const js=path.join(__dirname,'js')
const php=path.join(__dirname,'php')

fs.appendFile(`${js}/a10.js`,". good morning student",(error)=>{
    if(!error) console.log("updated")
})