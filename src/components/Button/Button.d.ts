type ShirtSize = 'small' | 'medium' | 'large';

export type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    size?: ShirtSize;
};
