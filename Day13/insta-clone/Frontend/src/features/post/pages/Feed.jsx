import React, { useEffect } from 'react'
import Posts from '../components/Posts'
import "../style/feed.scss"
import { usePost } from '../hook/usePost'
import Navbar from '../../shared/components/Navbar'

const Feed = () => {

  const {feed, loading, hanldeGetFeed, handleLike, handleUnLike} = usePost()

  useEffect(()=>{
    hanldeGetFeed()
  },[])

  if(loading || !feed){
    return<main><h1>Feed is Loading...</h1></main>
  }

  

  return (
   <main>
     <div className='feed-container'>
      <Navbar/>
        <div className="feed">
            {feed.map(post=>{
             return <Posts key={post._id} user={post.user} post={post} like={handleLike} unlike={handleUnLike} loading={loading} />
            })}
    </div>
    </div>
   </main>
    
  )
}

export default Feed
