const ImageKit = require("@imagekit/nodejs")

const client = new ImageKit({
    privateKey: process.env.ImageKit_Private_Key
    
})

async function uploadFile({buffer, filename, folder=""}) {
  
    try {
        const file = await client.files.upload({
        file: await ImageKit.toFile(Buffer.from(buffer)),
        fileName: filename,
        folder
    })
    console.log(file)
    return file
    } catch (error) {
        console.log(error)
        throw error
    }
}



module.exports = {
    uploadFile
}