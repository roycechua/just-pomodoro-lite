import { useRef, useState } from 'react';
import { TimerInputType } from '../types';

const useTimer = (timerParams: TimerInputType) => {
  const initalHours = timerParams.hours || 0;
  const initialMinutes = timerParams.minutes || 0;
  const initialSeconds = timerParams.seconds || 0;
  const [hours, setHours] = useState(initalHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef<number>(-1);

  const cleanupTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = -1;
    setIsTimerRunning(false);
  };

  const setTimer = (newTimeParams: TimerInputType) => {
    // do not allow modification to the time value if timer is running
    if (isTimerRunning) {
      return;
    }

    // remove previous timer if there is a previous id value
    if (timerRef.current) {
      cleanupTimer();
    }

    setHours(newTimeParams.hours || 0);
    setMinutes(newTimeParams.minutes || 0);
    setSeconds(newTimeParams.seconds || 0);
  };

  const reset = () => {
    setHours(initalHours);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
    setIsTimerRunning(false);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setIsTimerRunning(false);
  };

  const start = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // if totalSeconds is 0, don't countdown
    if (totalSeconds <= 0) {
      return;
    }

    setIsTimerRunning(true);

    let countdown = totalSeconds;
    timerRef.current = setInterval(() => {
      countdown--;
      const hrs = Math.floor(countdown / 3600);
      const mins = Math.floor((countdown % 3600) / 60);
      const secs = countdown % 60;

      setHours(hrs);
      setMinutes(mins);
      setSeconds(secs);

      if (countdown <= 0) {
        reset();
        cleanupTimer();
        if (timerParams.onComplete) {
          timerParams.onComplete();
        }
      }
    }, 1000);
  };

  return {
    hours,
    minutes,
    seconds,
    isTimerRunning,
    start,
    stop,
    setTimer,
  };
};

export default useTimer;
