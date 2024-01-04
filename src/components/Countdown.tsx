// import { useGlobalAppState } from '../providers/GlobalAppStateProvider';

import { useEffect, useState } from 'react';
import CountdownTimer from './CountdownTimer';
import useAudio from '../hooks/useAudio';

export default function Countdown() {
  // const [globalAppState, dispatch] = useGlobalAppState();
  const [workMode, setWorkMode] = useState(true);
  const { play: playSound, stop: stopSound } = useAudio(
    '/break_alarm.mp3',
    false
  );

  useEffect(() => {
    playSound();
    setTimeout(() => {
      stopSound();
    }, 10000);
  }, [workMode]);

  return (
    <>
      <CountdownTimer
        initialMinutes={workMode ? 25 : 5}
        message={workMode ? 'Work mode' : 'Take a break'}
        onComplete={() => {
          setWorkMode(!workMode);
        }}
      />
    </>
  );
}
