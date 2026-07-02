/* 
- server create krna
- server ko config krna

*/
const express = require("express")

const app = express()         /* instance of server is created*/

app.use(express.json())
const notes = [
    /*
    { title: hello title 1
      description : hello description 1 
    } 
    */
]

// app.get('/notes', (req, res)=>{
//     res.send('notes created')
// })

/*Post*/
app.post('/notes',(req, res)=>{
    // console.log(req.body);
    
    notes.push(req.body)
    res.send('Notes created succefully  ')
})

//  get notes
app.get('/notes',(req, res)=>{

    res.send(notes)
})


/* DELETE /notes */
/* params */

/* delete /notes/0 */

app.delete("/notes/:index",(req, res)=>{
    delete notes[req.params.index]
    res.send("note deleted sucessfully")
})


/* PATCH /notes/:index */
/* req.body = {description :- "sample modified description."} */     

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description

    res.send("Note Upadated sucessfully")
})
module.exports = app
