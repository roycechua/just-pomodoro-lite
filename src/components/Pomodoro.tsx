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
import { ModeType } from '../types';

export default function Countdown() {
  // const [globalAppState, dispatch] = useGlobalAppState();
  const [mode, setMode] = useState<ModeType>('work');
  const { play: playSound, stop: stopSound } = useAudio(
    'alarms/break_alarm2.mp3',
    false
  );

  // play sound on every mode change
  useEffect(() => {
    playSound();
    setTimeout(() => {
      stopSound();
    }, 10000);
  }, [mode]);

  return (
    <>
      <CountdownTimer
        initialMinutes={
          mode === 'work'
            ? DEFAULT_WORK_MODE_MINUTES
            : DEFAULT_BREAK_MODE_MINUTES
        }
        message={
          mode === 'work'
            ? DEFAULT_WORK_MODE_MESSAGE
            : DEFAULT_BREAK_MODE_MESSAGE
        }
        onComplete={() => {
          const newMode = mode === 'work' ? 'break' : 'work';
          setMode(newMode);
        }}
      />
    </>
  );
}
