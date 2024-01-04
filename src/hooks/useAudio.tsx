import { useEffect, useState } from 'react';

const useAudio = (url: string, playInitially: boolean) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(playInitially || false);

  const toggle = () => setPlaying(!playing);
  const play = () => setPlaying(true);
  const stop = () => setPlaying(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return { playing, play, stop, toggle };
};

export default useAudio;
