import { Children, useContext } from "react";
import { getSong } from "../services/song.api";
import { SongContext } from "../song.context";

export const useSong = () =>{
    const context = useContext(SongContext)

    const {song, setSong, loading , setLoading,  } = context

    async function handleGetSong({mood}) {
        setLoading(true)
        const data = await getSong({mood})
        console.log(data)
        setSong(data.song)
        setLoading(false)
    }

    return ({loading, song, handleGetSong})

}
