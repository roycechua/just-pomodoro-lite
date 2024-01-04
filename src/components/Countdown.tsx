// import { useGlobalAppState } from '../providers/GlobalAppStateProvider';

import { useState } from 'react';
import CountdownTimer from './CountdownTimer';

export default function Countdown() {
  // const [globalAppState, dispatch] = useGlobalAppState();
  const [workMode, setWorkMode] = useState(true);
  return (
    <>
      <CountdownTimer
        initialMinutes={workMode ? 25 : 5}
        message={workMode ? 'Work mode' : 'Take a break'}
        onComplete={() => {
          setWorkMode((prevValue) => !prevValue);
        }}
      />
    </>
  );
}
