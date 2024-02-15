import React from 'react';

type TimerButtonProps = {
  onClick: () => void;
  label: JSX.Element | string;
};

export default function TimerButton(props: TimerButtonProps) {
  const { onClick, label } = props;
  // make timer label flexible
  const timerLabel = React.isValidElement(label) ? (
    label
  ) : (
    <p className='m-0 text-2xl md:text-5xl font-bold'>{label}</p>
  );

  return (
    <div
      className='pt-5 md:pt-10 rounded-10 items-center justify-center flex cursor-pointer'
      onClick={onClick}
    >
      {timerLabel}
    </div>
  );
}
