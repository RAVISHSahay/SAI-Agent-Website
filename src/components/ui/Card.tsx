import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface CardProps {
    title: string;
    subtitle?: string;
    value?: string;
    icon?: LucideIcon;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
    title, subtitle, value, icon: Icon, children, className = '', onClick, hoverEffect = true
}) => {
    return (
        <div
            className={`glass-panel flex-col ${className}`}
            style={{
                padding: 'var(--spacing-6)',
                gap: 'var(--spacing-4)',
                cursor: onClick ? 'pointer' : 'default',
                transition: hoverEffect ? 'all var(--transition-normal)' : 'none'
            }}
            onClick={onClick}
        >
            <div className="flex justify-between items-start">
                {Icon && (
                    <div style={{
                        padding: 'var(--spacing-3)',
                        background: 'rgba(0, 212, 255, 0.1)',
                        borderRadius: 'var(--radius-lg)',
                        color: 'var(--color-secondary)',
                        marginBottom: 'var(--spacing-2)'
                    }}>
                        <Icon size={28} strokeWidth={1.5} />
                    </div>
                )}
                {value && (
                    <div className="text-gradient-accent" style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700 }}>
                        {value}
                    </div>
                )}
            </div>

            <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 'var(--spacing-2)', color: 'var(--color-text)', lineHeight: 1.2 }}>
                    {title}
                </h3>
                {subtitle && (
                    <p style={{ fontSize: '0.95rem', color: '#9CA3AF', lineHeight: 1.6 }}>
                        {subtitle}
                    </p>
                )}
            </div>

            {children && (
                <div style={{ marginTop: 'var(--spacing-2)' }}>
                    {children}
                </div>
            )}
        </div>
    );
};
