const followModel = require("../models/followModel")
const userModel = require("../models/userModel")


/* 
    follow user
*/
async function followUserController(req,res) {
    const follower = req.user.username
    const followee = req.params.username

    const isFollwerAlready = await followModel.findOne({
        follower: follower,
        followee: followee
    })

    if(followee==follower){
        return res.status(400).json({
            message: "You can't follow yourself"
        })
    }
      const followeeExists = await userModel.findOne({
         username: followee
    })

     if(!followeeExists){
        return res.status(404).json({
            message: "user doesn't exists"
        })
    } 

    if(isFollwerAlready){
        return res.status(400).json({
            message: `You already follow ${followee}`
        })
    }
   
    
    const followRecord =await followModel.create({
        follower:follower,
        followee:followee
    })
    res.status(201).json({
        message:  `followed successfully ${followee}`,
        followRecord
    })
}

/* 
    unfollow user
*/
async function UnfollowUserController(req,res) {
     const  followee = req.params.username
       const  follower = req.user.username

    const isUserFollowing = await followModel.findOne({
    followee: followee,
    follower: follower
})

if(!isUserFollowing){
   return res.status(200).json({
        message: `You don't follow ${followee}`
    })
}

await followModel.findByIdAndDelete(isUserFollowing._id)
return res.status(200).json({
    message: `you unfollowed ${followee}`
})
}



module.exports = {
    followUserController,
    UnfollowUserController
}