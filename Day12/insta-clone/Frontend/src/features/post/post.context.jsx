import { createContext, useState } from "react";

export const PostContext = createContext()
export const PostContextProvider =({children})=>{

    const [feed, setFeed] = useState(null);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);

    return <PostContext.Provider value={{feed, setFeed, post, setPost, loading, setLoading }}>
        {children}
    </PostContext.Provider>
}

