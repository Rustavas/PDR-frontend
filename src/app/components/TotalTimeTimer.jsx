'use client';

import { useEffect, useState } from 'react';

const TotalTimeTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 59) {
          setMinutes(prevMinutes => prevMinutes + 1);
          return 0;
        }
        return prevSeconds + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Таймер</h1>
      <p>
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>
    </div>
  );
};

export default TotalTimeTimer;
