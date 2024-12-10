// src/app/trafficLightLoader/TrafficLightLoader.jsx
'use client';

import React, { useEffect, useState } from 'react';
import './TrafficLightLoader.css'; // Убедитесь, что этот файл существует и стилизует ваш лоадер

const TrafficLightLoader = () => {
  const [activeLight, setActiveLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLight(prev => {
        if (prev === 'red') return 'green';
        if (prev === 'green') return 'yellow';
        return 'red';
      });
    }, 500); // Меняет цвет каждую секунду

    return () => clearInterval(interval); // Очищает интервал при размонтировании
  }, []);

  return (
    <div className="traffic-light-loader">
      <div
        className={`light red ${activeLight === 'red' ? 'active' : ''}`}
      ></div>
      <div
        className={`light yellow ${activeLight === 'yellow' ? 'active' : ''}`}
      ></div>
      <div
        className={`light green ${activeLight === 'green' ? 'active' : ''}`}
      ></div>
    </div>
  );
};

export default TrafficLightLoader;
