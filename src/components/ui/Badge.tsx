import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'blue' | 'green' | 'warning' | 'purple';
    pulse?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'blue',
    pulse = false,
    className = '',
    ...props
}) => {
    const getStyles = () => {
        switch (variant) {
            case 'green':
                return { bg: 'rgba(16, 185, 129, 0.1)', color: 'var(--color-success)', border: 'rgba(16, 185, 129, 0.2)' };
            case 'warning':
                return { bg: 'rgba(245, 158, 11, 0.1)', color: 'var(--color-warning)', border: 'rgba(245, 158, 11, 0.2)' };
            case 'purple':
                return { bg: 'rgba(99, 91, 255, 0.1)', color: 'var(--color-accent)', border: 'rgba(99, 91, 255, 0.2)' };
            case 'blue':
            default:
                return { bg: 'rgba(0, 212, 255, 0.1)', color: 'var(--color-secondary)', border: 'rgba(0, 212, 255, 0.2)' };
        }
    };

    const styles = getStyles();

    return (
        <span
            className={`badge ${pulse ? 'animate-pulse-glow' : ''} ${className}`}
            style={{
                background: styles.bg,
                color: styles.color,
                borderColor: styles.border,
                ...props.style
            }}
        >
            {children}
        </span>
    );
};
