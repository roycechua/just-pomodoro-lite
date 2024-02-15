import { useEffect } from 'react';

type useSetTitleProps = {
  hours: number;
  minutes: number;
  seconds: number;
};
export const useSetTitle = (props: useSetTitleProps) => {
  const { hours, minutes, seconds } = props;

  useEffect(() => {
    const newTitle = `${
      hours > 0 ? hours.toString().padStart(2, '0') + ':' : ''
    }${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
    document.title = newTitle;
  }, [hours, minutes, seconds]);
};
