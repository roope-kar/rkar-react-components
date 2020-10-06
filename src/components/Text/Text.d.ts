type ShirtSize = 'small' | 'medium' | 'large';

export type TextProps = {
    className?: string;
    children: React.ReactNode;
    size?: ShirtSize;
};
