import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Portal } from 'src/components/Portal';
import 'src/types';

export default {
  title: 'Portal',
  component: Portal,
} as Meta;

export const SimplePortal: React.FunctionComponent = () => {
  const target = document.createElement('div');

  React.useEffect(() => {
    document.body.appendChild(target);
    return () => {
      document.body.removeChild(target);
    };
  }, []);

  return <Portal to={target}>Simple Portal</Portal>;
};
