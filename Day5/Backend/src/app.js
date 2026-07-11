/* Start Server */
const express = require("express")
const noteModel = require("./model/note.model")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
 
/* 
    -Post /api/notes
    -create new note and save data in mongoDB
    -req.body = {title ,description}
 */


    app.post('/api/notes', async (req,res)=>{
        const{title, description} = req.body
        
        
        
    const note = await noteModel.create({
            title,description

        })
        res.status(201).json({
            message : 'Note Created Successfully',
            note
        })
    })


/* 
    -Get /api/notes
    -Fetch all notes data from mongoDB and send them in the response
 */

    app.get('/api/notes',async (req,res)=>{
        const note = await noteModel.find()

        res.status(200).json({
            message: 'Notes Fetched Successfully',
            note
        })
    })


/* 
    -Delete/api/notes/:id
    -Delete note with request id from req.params
 */
    app.delete("/api/notes/:id",async (req,res)=>{

        const id = req.params.id
        const note =await noteModel.findByIdAndDelete(id)
        
        res.status(200).json({
            message:"Note deleted Sucessfully"
            ,note
        })
    })


    /* 
        -Patch/api/notes/:id
        -update description of note by id 
        -req.body = {description}
     */
        app.patch('/api/notes/:id', async(req,res)=>{
            const id = req.params.id
            const {title,description} = req.body

            const note = await noteModel.findByIdAndUpdate(id,{title,description})

            res.status(200).json({
                message: 'Modified successfully'
            })

        })
module.exports = app
