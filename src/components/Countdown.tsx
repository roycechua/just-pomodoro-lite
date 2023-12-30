// import { useGlobalAppState } from '../providers/GlobalAppStateProvider';
import { useCallback } from 'react';
import useTimer from '../hooks/useTimer';

export default function Countdown() {
  // const [globalAppState, dispatch] = useGlobalAppState();
  const { hours, minutes, seconds, isTimerRunning, start, stop } = useTimer({
    minutes: 5,
  });

  const handleTimerButton = useCallback(() => {
    if (isTimerRunning) {
      stop();
    } else {
      start();
    }
  }, [isTimerRunning, hours, minutes, seconds, start, stop]);

  const renderTimerButtonLabel = isTimerRunning ? 'Stop' : 'Start';

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
      <button
        style={{ padding: 20, borderRadius: 10 }}
        onClick={handleTimerButton}
      >
        {renderTimerButtonLabel}
      </button>
    </div>
  );
}
