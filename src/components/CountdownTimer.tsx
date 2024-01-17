import { useCallback, useEffect } from 'react';
import useTimer from '../hooks/useTimer';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';

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

  useEffect(() => {
    document.title = `${
      hours > 0 ? hours.toString().padStart(2, '0') + ':' : ''
    }${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }, [hours, minutes, seconds]);

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
      if (e.key === ' ') {
        handleTimerButtonPressed();
      }
    };
    window.addEventListener('keypress', keyListener);
    return () => {
      window.removeEventListener('keypress', keyListener);
    };
  }, [isTimerRunning, handleTimerButtonPressed]);

  const renderTimerButtonLabel = isTimerRunning ? (
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
      <p className='m-0 mb-4 sm:mb-4 md:mb-10 text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-bold'>
        {hours > 0 ? `${hours.toString().padStart(2, '0')}:` : null}
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>

      {message && (
        <p className='text-2xl sm:text-2xl md:text-5xl lg:text-6xl  font-bold'>
          {message}
        </p>
      )}

      <div
        className='pt-5 md:pt-10 rounded-10 items-center justify-center flex cursor-pointer'
        onClick={handleTimerButtonPressed}
      >
        {renderTimerButtonLabel}
      </div>
    </div>
  );
}
