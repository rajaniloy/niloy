const fs=require("fs")
const path=require("path")
const js=path.join(__dirname,'js')
const php=path.join(__dirname,'php')

fs.unlink(`${php}/b2.php`,(err)=>{
    if(!err) console.log("deleted")
    
})