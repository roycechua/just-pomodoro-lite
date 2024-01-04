// import { useGlobalAppState } from '../providers/GlobalAppStateProvider';
import { useCallback, useEffect } from 'react';
import useTimer from '../hooks/useTimer';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';

export default function Countdown() {
  // const [globalAppState, dispatch] = useGlobalAppState();
  const { hours, minutes, seconds, isTimerRunning, start, stop } = useTimer({
    minutes: 5,
  });

  const handleTimerButtonPressed = useCallback(() => {
    if (isTimerRunning) {
      stop();
    } else {
      start();
    }
  }, [isTimerRunning, start, stop]);

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
      <p style={{ margin: 0, fontSize: '3rem' }}>Play</p>
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
