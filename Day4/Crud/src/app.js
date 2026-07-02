// server config, create krney ke liye

const express = require("express")
const noteModel = require("./models/notemodels")
const app = express()


app.use(express.json())
/* 
- Post / notes 
- req.body => {title, description}
 */

app.post('/notes', async(req,res)=>{
    const {title, description} = req.body


    const note = await noteModel.create(
        {title,description}
    )

    res.status(201).json({
        message: "Note created successfully",
        note
    })
})

 /*
- Get / notes 
 */   
app.get('/notes',async(req,res)=>{
   const notes = await noteModel.find()

   res.status(200).json({
    message:"feteched succefully",
    notes
   })
})
module.exports = app