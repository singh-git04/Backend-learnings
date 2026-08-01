const { Router } = require("express")
const upload = require("../middlewares/upload.middleware")
const songController = require("../controllers/songController")


const router = Router()

/* 
    * Post/api/songs/
*/

router.post("/", upload.single("song"),songController.uploadSong)

router.get("/",songController.getSong)

module.exports = router
