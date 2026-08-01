import { createContext, useContext, useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

    const [song, setSong] = useState({
        "url": "https://ik.imagekit.io/uvkmtmuur/cohort-2/moodify/songs/Ye_Bikhra_Hai_Saaman__DOWNLOAD_MING__qTwYou4pj.mp3",
        "posterUrl": "https://ik.imagekit.io/uvkmtmuur/cohort-2/moodify/posters/Ye_Bikhra_Hai_Saaman__DOWNLOAD_MING__eA4Pm4yLu.jpeg",
        "title": "Ye Bikhra Hai Saaman [DOWNLOAD MING]",
        "mood": "sad",
    })

    const [loading, setLoading] = useState(false);

    return <SongContext.Provider 
    value={{song, setSong, loading, setLoading}}>
        {children}
    </SongContext.Provider>
}