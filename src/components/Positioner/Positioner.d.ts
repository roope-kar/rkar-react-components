import React from 'react';

export type PositionerProps = {
  children: React.ReactNode | React.ReactNodeArray;
  content: (position: { x: number, y: number }) => React.ReactNode | React.ReactNodeArray;
};
