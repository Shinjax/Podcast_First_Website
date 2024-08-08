"use client"
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { TbRewindBackward30 } from 'react-icons/tb';
import { TbRewindForward30 } from 'react-icons/tb';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa'; 
import { FaVolumeUp, FaVolumeOff } from 'react-icons/fa';
import { Howl } from 'howler';

const PodcastBox = ({podcast}) => {

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [currentVolume, setCurrentVolume] = useState(1.0) 
  const [seekValue, setSeekValue] = useState(0)
  const sound = useRef(null)

  const initializeSound = () => {
    sound.current = new Howl({
      src: [podcast.audio_url],
      volume: 1.0,
      loop: false,
      html5: true,
      onend: () => setIsPlaying(false),
      onload: () => {
        setDuration(sound.current.duration())
        setSeekValue(0)
      },
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => {
        setIsPlaying(false)
        setCurrentTime(0)
        setSeekValue(0)
      },
    })
  }

  useEffect(() => {
    initializeSound();
    const timer = setInterval(() => {
      if (sound.current && sound.current.playing()) {
        const time = sound.current.seek()
        setCurrentTime(time)
        setSeekValue((time / sound.current.duration()) * 100)
      }
    }, 1000)

    return () => {
      clearInterval(timer)
      if (sound.current) {
        sound.current.unload()
      }
    }
  }, []);

  const handleSeek = (e) => {
    const value = parseFloat(e.target.value)
    setSeekValue(value)
    const seekTime = (value / 100) * duration
    setCurrentTime(seekTime)
    if (sound.current) {
      sound.current.seek(seekTime)
    }
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      sound.current.pause()
    } else {
      sound.current.play()
    }
  }

  const handleRewindBackward = () => {
    const newTime = currentTime - 30
    sound.current.seek(newTime >= 0 ? newTime : 0)
    setCurrentTime(newTime >= 0 ? newTime : 0)
    setSeekValue((newTime >= 0 ? newTime : 0) / duration * 100)
  }

  const handleRewindForward = () => {
    const newTime = currentTime + 30
    sound.current.seek(newTime <= duration ? newTime : duration)
    setCurrentTime(newTime <= duration ? newTime : duration)
    setSeekValue((newTime <= duration ? newTime : duration) / duration * 100)
  }

  const handleVolumeToggle = () => {
    if (isMuted) {
      sound.current.volume(currentVolume)
    } else {
      sound.current.volume(0.0)
    }
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    sound.current.volume(newVolume)
    setCurrentVolume(newVolume)
  }

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <div className='bg-DarkGold w-full rounded mt-10 mb-10 flex flex-col lg:flex-row'>
      <div className='flex-shrink-0 p-10 flex justify-center lg:justify-start'>
        <Image  
          src='/Images/SteakNEggs.jpg' 
          alt='Steak and Eggs Podcast' 
          width={225} 
          height={225} 
          quality={100}
          className='rounded' 
        />
      </div>
      <div className='flex-grow p-10 flex flex-col justify-between'>
        <h1 className='text-text font-bold'>{podcast.title}</h1>
        <div className="mt-2 text-text text-sm">
          <span className="font-medium">Hosts:</span> {podcast.hosts} |{' '}
          <span className="font-medium">Guests:</span> {podcast.guests}
        </div>        
        <p className='mt-5 mb-5 lg:mb-0 text-start'>{podcast.description}</p>
        {/* start of progress bar */}
        <div className='mt-auto flex flex-col lg:flex-row justify-center lg:justify-between items-center'>
          <div className='flex space-x-2'>
            <i onClick={handleRewindBackward}> <TbRewindBackward30 /></i>
            <i onClick={handlePlayPause}> {isPlaying ? <FaPause /> : <FaPlay />}</i>
            <i onClick={handleRewindForward}> <TbRewindForward30 /></i>
          </div>
          <div className='flex-grow flex w-full mx-4 items-center'>
            <p className=''>{formatTime(currentTime)}</p>
            <input
              className='mx-2 w-full'
              type='range'
              min={0}
              max={100}
              value={seekValue}
              onChange={handleSeek}
            />
            <p className=''>{formatTime(duration)}</p>
          </div>
          <div className='flex space-x-2'>
            <i onClick={handleVolumeToggle}> {isMuted ? <FaVolumeOff /> : <FaVolumeUp />}</i>
            <input
              className=''
              type='range'
              min={0.0}
              max={1.0}
              step={0.01}
              value={currentVolume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
        {/* progress bar end */}
      </div>
    </div>
  );
};

export default PodcastBox;