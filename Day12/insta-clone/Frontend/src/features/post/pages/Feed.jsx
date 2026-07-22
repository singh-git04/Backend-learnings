import React, { useEffect } from 'react'
import Posts from '../components/Posts'
import "../style/feed.scss"
import { usePost } from '../hook/usePost'

const Feed = () => {

  const {feed, loading, hanldeGetFeed} = usePost()

  useEffect(()=>{
    hanldeGetFeed()
  },[])

  if(loading || !feed){
    return<main><h1>Feed is Loading...</h1></main>
  }

  

  return (
    <main className='feed-container'>
        <div className="feed">
            {feed.map(post=>{
             return <Posts user={post.user} post={post}/>
            })}
    </div>
    </main>
    
  )
}

export default Feed
