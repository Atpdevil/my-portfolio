import { useEffect, useRef, useState } from "react";
import soundOn from "../assets/icons/soundon.svg";
import soundOff from "../assets/icons/soundoff.svg";
import sakura from "../assets/sakura.mp3";

const GlobalAudio = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.5;
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!playing && audio.paused) {
      await audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={sakura} preload="auto" />

      <button
        onClick={toggleAudio}
        className="fixed top-6 right-6 z-[9999]
                   w-12 h-12 rounded-full
                   flex items-center justify-center
                   backdrop-blur-md bg-white/10
                   hover:bg-white/20 transition"
      >
        <img
          src={playing ? soundOn : soundOff}
          alt="sound toggle"
          className="w-6 h-6"
        />
      </button>
    </>
  );
};

export default GlobalAudio;
