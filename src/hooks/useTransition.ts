import React from 'react';

export default function useTransition(callback: (time: number, delta: number) => void): void {
  const requestRef = React.useRef<number>(0);
  const prevTimeRef = React.useRef<number>(Date.now());
  const startRef = React.useRef<number>(Date.now());

  const animate = () => {
    const now: number = Date.now();
    const time: number = (now - startRef.current) / 1000;
    const delta: number = (now - prevTimeRef.current) / 1000;
    callback(time, delta);
    prevTimeRef.current = now;
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  });
}
