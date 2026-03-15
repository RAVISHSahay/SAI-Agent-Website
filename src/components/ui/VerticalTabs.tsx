import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Tab {
    id: string;
    label: string;
    icon?: LucideIcon;
    color?: string;
}

interface VerticalTabsProps {
    tabs: Tab[];
    activeTab: string;
    onChange: (id: string) => void;
    children: React.ReactNode;
}

export const VerticalTabs: React.FC<VerticalTabsProps> = ({ tabs, activeTab, onChange, children }) => {
    return (
        <div className="flex gap-8" style={{ minHeight: '600px', flexDirection: 'row' }}>
            {/* Sidebar Navigation */}
            <div
                className="glass-panel hide-scrollbar"
                style={{
                    width: '320px',
                    flexShrink: 0,
                    padding: 'var(--spacing-4)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-2)',
                    maxHeight: '800px',
                    overflowY: 'auto'
                }}
            >
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    const Icon = tab.icon;
                    const activeColor = tab.color || 'var(--color-secondary)';

                    return (
                        <button
                            key={tab.id}
                            onClick={() => onChange(tab.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--spacing-3)',
                                padding: 'var(--spacing-4)',
                                borderRadius: 'var(--radius-md)',
                                background: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                                border: `1px solid ${isActive ? 'rgba(255,255,255,0.1)' : 'transparent'}`,
                                color: isActive ? '#fff' : 'var(--color-text-muted)',
                                textAlign: 'left',
                                cursor: 'pointer',
                                transition: 'all var(--transition-fast)',
                                position: 'relative',
                                overflow: 'hidden',
                                outline: 'none'
                            }}
                            onMouseEnter={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                    e.currentTarget.style.color = '#fff';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!isActive) {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = 'var(--color-text-muted)';
                                }
                            }}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTabIndicator"
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: '20%',
                                        bottom: '20%',
                                        width: '3px',
                                        background: activeColor,
                                        borderRadius: '0 4px 4px 0',
                                        boxShadow: `0 0 10px ${activeColor}`
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            <div
                                style={{
                                    color: isActive ? activeColor : 'inherit',
                                    transition: 'color var(--transition-fast)'
                                }}
                            >
                                {Icon && <Icon size={20} strokeWidth={isActive ? 2 : 1.5} />}
                            </div>
                            <span style={{ fontWeight: isActive ? 600 : 500, fontSize: 'var(--font-size-base)' }}>
                                {tab.label}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Content Area */}
            <div style={{ flex: 1, position: 'relative' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
