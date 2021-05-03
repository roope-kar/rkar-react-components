import React from 'react';

export type TransitionProps = {
    show: boolean;
    children: React.ReactNode;
    onEnterClassName: string;
    onLeaveClassName: string;
}
