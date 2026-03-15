import React from 'react';
import { motion } from 'framer-motion';

interface TabListProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
    specialTab?: string;
    onSpecialTabClick?: () => void;
}

export const HorizontalTabs: React.FC<TabListProps> = ({ tabs, activeTab, onTabChange, specialTab, onSpecialTabClick }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-16)' }}>
            <div style={{
                display: 'inline-flex',
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(10px)',
                padding: '0.5rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(255,255,255,0.1)',
                gap: '0.5rem',
                alignItems: 'center'
            }}>
                {tabs.map((tab) => {
                    const isSpecial = specialTab === tab;
                    const isActive = activeTab === tab;

                    if (isSpecial) {
                        return (
                            <button
                                key={tab}
                                onClick={onSpecialTabClick}
                                style={{
                                    position: 'relative',
                                    padding: '0.75rem 1.75rem',
                                    color: '#0052FF',
                                    background: '#fff',
                                    border: 'none',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: 'var(--font-size-sm)',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    marginLeft: '0.5rem',
                                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
                                    transition: 'transform 0.2s',
                                    outline: 'none'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                {tab}
                            </button>
                        );
                    }

                    return (
                        <button
                            key={tab}
                            onClick={() => onTabChange(tab)}
                            style={{
                                position: 'relative',
                                padding: '0.75rem 1.5rem',
                                color: isActive ? '#fff' : 'var(--color-text-muted)',
                                background: 'transparent',
                                border: 'none',
                                borderRadius: 'var(--radius-full)',
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: isActive ? 600 : 500,
                                cursor: 'pointer',
                                transition: 'color 0.2s',
                                outline: 'none',
                                zIndex: 1
                            }}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="horizontal-tab-indicator"
                                    initial={false}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(0, 212, 255, 0.2)',
                                        borderRadius: 'var(--radius-full)',
                                        border: '1px solid rgba(0, 212, 255, 0.4)',
                                        zIndex: -1
                                    }}
                                />
                            )}
                            {tab}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
