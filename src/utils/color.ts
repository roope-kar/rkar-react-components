import { readableColor } from 'polished';

export const getBackgroundColor = (color: string): string => {
    return readableColor(color, 'rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.1)');
}
