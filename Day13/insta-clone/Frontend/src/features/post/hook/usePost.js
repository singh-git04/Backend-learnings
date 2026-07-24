import { useContext } from "react";
import { PostContext } from "../post.context";

import { getFeed,createPost, likePost, unlikePost } from "../service/post.api";
import { useEffect } from "react";

export const usePost=()=>{
    const context = useContext(PostContext)
    const {feed, setFeed, post, setPost, loading, setLoading, } = context

    const hanldeGetFeed = async () =>{

        setLoading(true)
        const data  = await getFeed()
        
        setFeed(data.posts.reverse())
        setLoading(false)
         
    }
    const handleCreatePost = async(image_Url,caption) =>{
        setLoading(true)

        const data = await createPost(image_Url,caption)
       
        setFeed([data.post,...feed])

        setLoading(false)
        
    }

    const handleLike = async(post) =>{
        setLoading(true)
        const data =  await likePost(post)
        hanldeGetFeed()
        setLoading(false)
    }
    const handleUnLike = async(post) =>{
        setLoading(true)
        const data =  await unlikePost(post)
        hanldeGetFeed()
        setLoading(false)
    }
 
    return {loading,  feed, post, hanldeGetFeed,handleCreatePost, handleLike, handleUnLike}
}