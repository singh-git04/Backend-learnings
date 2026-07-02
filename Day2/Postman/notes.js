const express = require("express")

const app  = express()
app.use(express.json())
const notes = []
app.post('/note',(req, res)=>{

    console.log(req.body);
    
    notes.push(req.body)

    res.send("note created")
})

app.get('/note',(req, res)=>{
    res.send(notes)
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})
