const mongoose = require("mongoose")

/* format of data */
const notesSchema = new mongoose.Schema({
    title: String,
    description:String
})
/* model to perform any crud operation */
const noteModel = mongoose.model("notes",notesSchema)

module.exports = noteModel