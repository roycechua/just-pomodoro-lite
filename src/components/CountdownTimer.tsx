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
      <FaPause color={'#9EE493'} size={45} style={{ marginRight: 10 }} />
      <p style={{ margin: 0, fontSize: '3rem' }}>Stop</p>
    </>
  ) : (
    <>
      <FaPlay color={'#9EE493'} size={45} style={{ marginRight: 10 }} />
      <p style={{ margin: 0, fontSize: '3rem' }}>Start</p>
    </>
  );

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <p className='timer'>
        {hours > 0 ? `${hours.toString().padStart(2, '0')}:` : null}
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>

      {message && (
        <p style={{ fontSize: '4rem', fontWeight: 'bold' }}>{message}</p>
      )}

      <div
        style={{
          padding: 20,
          borderRadius: 10,
          fontSize: 30,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          display: 'flex',
          cursor: 'pointer',
        }}
        onClick={handleTimerButtonPressed}
      >
        {renderTimerButtonLabel}
      </div>
    </div>
  );
}
