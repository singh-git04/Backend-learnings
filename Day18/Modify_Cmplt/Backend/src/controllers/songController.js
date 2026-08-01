const songModel  = require("../models/songModel")
const id3 = require("node-id3")
const storageService = require("../services/storage.services")

async function uploadSong(req,res) {

    const songBuffer = req.file.buffer
    const {mood} = req.body
    console.log(mood)

    const tags = id3.read(songBuffer)

   

     /* 
        This is taking time around 3.7s as happening one after another 
     */
    // const songFile = storageService.uploadFile({
    //     buffer: songBuffer,
    //     filename: tags.title + ".mp3",
    //     folder: "/cohort-2/moodify/songs"
    // })

    // const posterFile = await storageService.uploadFile({
    //     buffer: tags.image.imageBuffer,
    //     filename: tags.title + ".jpeg",
    //     folder: "/cohort-2/moodify/posters"
    // })

/* 
    as uploading alltogether time is reduced
*/
      const [ songFile, posterFile ] = await Promise.all([
        storageService.uploadFile({
            buffer: songBuffer,
            filename: tags.title + ".mp3",
            folder: "/cohort-2/moodify/songs"
        }),
        storageService.uploadFile({
            buffer: tags.image.imageBuffer,
            filename: tags.title + ".jpeg",
            folder: "/cohort-2/moodify/posters"
        })
    ])
    const song = await songModel.create({
        title: tags.title,
        url: songFile.url,
        posterUrl: posterFile.url,
        mood
    })

    res.status(201).json({
        message: "Song uploaded Successfully",
        song
    })
}


async function getSong(req,res) {
    const {mood} = req.query

    const song = await songModel.findOne({
        mood
    })
    res.status(200).json({
        message: "Song Feteched Successfully",
        song
    })
}
module.exports = {
    uploadSong,
    getSong
}