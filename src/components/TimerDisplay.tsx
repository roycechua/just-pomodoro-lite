type TimerDisplayProps = {
  hours: number;
  minutes: number;
  seconds: number;
};

export default function TimerDisplay(props: TimerDisplayProps) {
  const { hours, minutes, seconds } = props;
  return (
    <p className='m-0 mb-4 sm:mb-4 md:mb-10 text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-bold'>
      {hours > 0 ? `${hours.toString().padStart(2, '0')}:` : null}
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
    </p>
  );
}
