import React from 'react';
import { ArrowIconProps } from 'src/components/ArrowIcon/ArrowIcon.d';
import theme from 'src/theme';

const ArrowIcon: React.FunctionComponent<ArrowIconProps> = ({ direction, theme }) => {
  if (direction === 'asc') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={theme?.color.default || 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up"
      >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={theme?.color.default || 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-down"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    );
  }
};

ArrowIcon.defaultProps = {
  theme,
};

export default ArrowIcon;
