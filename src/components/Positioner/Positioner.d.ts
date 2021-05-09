import React from 'react';

export type PositionerProps = {
  children: React.ReactNode;
  content: (position: { x: number, y: number }) => React.ReactNode;
};
