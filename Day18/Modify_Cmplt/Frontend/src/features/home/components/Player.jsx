import React, { useEffect, useRef, useState } from 'react'
import { useSong } from '../hooks/useSong'
import '../styles/player.scss'

const Player = () => {
  const { song } = useSong()
  console.log(song ,"playere song")
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playbackRate, setPlaybackRate] = useState(1)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0)
      setCurrentTime(0)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('ended', handleEnded)
    audio.playbackRate = playbackRate

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [playbackRate, song?.url])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate
    }
  }, [playbackRate])

  const formatTime = (time) => {
    if (!Number.isFinite(time) || time < 0) return '0:00'

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    try {
      await audio.play()
      setIsPlaying(true)
    } catch (error) {
      console.error('Playback failed', error)
    }
  }

  const skipTime = (seconds) => {
    const audio = audioRef.current
    if (!audio) return

    const nextTime = Math.min(Math.max(audio.currentTime + seconds, 0), audio.duration || 0)
    audio.currentTime = nextTime
    setCurrentTime(nextTime)
  }

  const handleProgressChange = (event) => {
    const audio = audioRef.current
    if (!audio) return

    const nextTime = Number(event.target.value)
    audio.currentTime = nextTime
    setCurrentTime(nextTime)
  }

  return (
    <div className="player-shell">
      <audio ref={audioRef} src={song?.url} preload="metadata" />

      <div className="player-card">
        <div className="player-info">
          <img src={song?.posterUrl} alt={song?.title} className="player-poster" />
          <div className="player-meta">
            <h3 className="player-title">{song?.title || 'Now playing'}</h3>
            <p className="player-subtitle">
              {song?.mood ? `Mood: ${song.mood}` : 'Pick a mood to start listening'}
            </p>
          </div>
        </div>

        <div className="player-controls">
          <div className="player-buttons">
            <button className="player-btn player-btn--ghost" onClick={() => skipTime(-5)} type="button">
              - 5s
            </button>
            <button className="player-btn player-btn--primary" onClick={togglePlayback} type="button">
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button className="player-btn player-btn--ghost" onClick={() => skipTime(5)} type="button">
              + 5s 
            </button>  
          </div>

          <div className="player-progress">
            <span className="player-time">{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              onChange={handleProgressChange}
              className="player-range"
            />
            <span className="player-time">{formatTime(duration)}</span>
          </div>

        </div>
           <div className="player-footer">
            <span className="player-speed-label">Playback speed</span>
            <select
              value={playbackRate}
              onChange={(event) => setPlaybackRate(Number(event.target.value))}
              className="player-speed-select"
            >
              <option value="0.75">0.75x</option>
              <option value="1">1x</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
          </div>
      </div>
    </div>
  )
}

export default Player
