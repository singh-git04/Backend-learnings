const mongoose = require("mongoose")

const blackListSchema = mongoose.Schema({
    token: {
        type:String,
        required: [true,"Token is required for blacklisting"]

    }
},{
    timestamps: true
})

const blackListModel = mongoose.model("blacklist",blackListSchema)

module.exports = blackListModel