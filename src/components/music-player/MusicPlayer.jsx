import { FaPlayCircle, FaPause } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleUserInteraction = () => {
      audioElement.play();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      setIsPlaying(true);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="cursor-pointer">
      <audio ref={audioRef} src="/musicBIW.mp3" autoPlay />
      <div>
        {isPlaying ? (
          <FaPause onClick={togglePlayPause} size="30" color="white" />
        ) : (
          <FaPlayCircle onClick={togglePlayPause} size="30" color="white" />
        )}
      </div>
    </main>
  )
}