import { useState } from 'react';

type TimerMessageProps = {
  message: string;
  onEditModeToggled: (newValue: boolean) => void;
};

export default function TimerMessage(props: TimerMessageProps) {
  const { message, onEditModeToggled } = props;
  const [timerMessage, setTimerMessage] = useState(message);
  const [timerMessageEditMode, setTimerMessageEditMode] = useState(false);

  const toggleTimerMessageEditMode = () => {
    const newEditModeValue = !timerMessageEditMode;
    setTimerMessageEditMode(newEditModeValue);
    onEditModeToggled(newEditModeValue);
  };

  return timerMessageEditMode ? (
    <div className='w-full'>
      <input
        value={timerMessage}
        placeholder={message}
        onChange={(e) => setTimerMessage(e.target.value)}
        className='rounded-md focus:outline-none focus:border-transparent text-2xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-center text-wrap'
        onKeyDown={(e) => {
          // if spacebar was presed
          if (e.key === 'Escape') {
            toggleTimerMessageEditMode();
          }
        }}
        style={{ backgroundColor: 'transparent' }}
      />
    </div>
  ) : (
    <p
      className='text-2xl sm:text-2xl md:text-5xl lg:text-6xl font-bold'
      onClick={toggleTimerMessageEditMode}
    >
      {timerMessage}
    </p>
  );
}
