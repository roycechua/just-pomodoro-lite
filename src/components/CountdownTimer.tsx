import { useCallback, useEffect, useState } from 'react';
import useTimer from '../hooks/useTimer';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import TimerMessage from './TimerMessage';
import TimerButton from './TimerButton';
import { useSetTitle } from '../hooks/useSetTitle';
import TimerDisplay from './TimerDisplay';

type CountdownTimerProps = {
  initialMinutes: number;
  message?: string;
  onComplete?: () => void;
};

export default function CountdownTimerProps(props: CountdownTimerProps) {
  const { initialMinutes, message, onComplete } = props;
  const { hours, minutes, seconds, isTimerRunning, start, stop, setTimer } =
    useTimer({
      onComplete,
    });
  const [onEditMode, setOnEditMode] = useState(false);
  useSetTitle({ hours, minutes, seconds });

  const handleTimerButtonPressed = useCallback(() => {
    if (isTimerRunning) {
      stop();
    } else {
      start();
    }
  }, [isTimerRunning, start, stop]);

  useEffect(() => {
    setTimer({
      minutes: initialMinutes,
    });
  }, [initialMinutes]);

  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      // if spacebar was presed
      if (e.key === ' ' && !onEditMode) {
        handleTimerButtonPressed();
      }
    };
    window.addEventListener('keypress', keyListener);
    return () => {
      window.removeEventListener('keypress', keyListener);
    };
  }, [isTimerRunning, handleTimerButtonPressed]);

  const timerLabel = isTimerRunning ? (
    <>
      <FaPause color={'#9EE493'} size={30} style={{ marginRight: 10 }} />
      <p className='m-0 text-2xl md:text-5xl font-bold'>Stop</p>
    </>
  ) : (
    <>
      <FaPlay color={'#9EE493'} size={30} style={{ marginRight: 10 }} />
      <p className='m-0 text-2xl md:text-5xl font-bold'>Start</p>
    </>
  );

  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <TimerDisplay hours={hours} minutes={minutes} seconds={seconds} />

      {message && (
        <TimerMessage
          message={message}
          onEditModeToggled={(newValue) => setOnEditMode(newValue)}
        />
      )}

      <TimerButton onClick={handleTimerButtonPressed} label={timerLabel} />
    </div>
  );
}
