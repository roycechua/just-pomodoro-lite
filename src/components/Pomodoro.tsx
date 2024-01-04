// import { useGlobalAppState } from '../providers/GlobalAppStateProvider';

import { useEffect, useState } from 'react';
import CountdownTimer from './CountdownTimer';
import useAudio from '../hooks/useAudio';
import {
  DEFAULT_BREAK_MODE_MESSAGE,
  DEFAULT_BREAK_MODE_MINUTES,
  DEFAULT_WORK_MODE_MESSAGE,
  DEFAULT_WORK_MODE_MINUTES,
} from '../utils/constants';

export default function Countdown() {
  // const [globalAppState, dispatch] = useGlobalAppState();
  const [workMode, setWorkMode] = useState(true);
  const { play: playSound, stop: stopSound } = useAudio(
    '/break_alarm.mp3',
    false
  );

  useEffect(() => {
    if (!workMode) {
      playSound();
      setTimeout(() => {
        stopSound();
      }, 15000);
    }
  }, [workMode]);

  return (
    <>
      <CountdownTimer
        initialMinutes={
          workMode ? DEFAULT_WORK_MODE_MINUTES : DEFAULT_BREAK_MODE_MINUTES
        }
        message={
          workMode ? DEFAULT_WORK_MODE_MESSAGE : DEFAULT_BREAK_MODE_MESSAGE
        }
        onComplete={() => {
          setWorkMode(!workMode);
        }}
      />
    </>
  );
}
