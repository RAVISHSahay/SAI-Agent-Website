import React from 'react';
import { motion } from 'framer-motion';
import {
    MoveRight, Shield, ShoppingCart, PieChart, Users, Layers, TrendingUp, Monitor, Building2
} from 'lucide-react';
import { Badge } from '../ui/Badge';

const departments = [
    { icon: ShoppingCart, name: 'Procurement', mapped: 'procurement', value: '$40M/Yr' },
    { icon: PieChart, name: 'Finance', mapped: 'finance', value: '$35M/Yr' },
    { icon: Shield, name: 'Compliance', mapped: 'compliance', value: '$18M/Yr' },
    { icon: Users, name: 'HR', mapped: 'hr', value: '$15M/Yr' },
    { icon: Layers, name: 'Operations', mapped: 'operations', value: '$22M/Yr' },
    { icon: TrendingUp, name: 'Sales', mapped: 'sales', value: '$17M/Yr' },
    { icon: Monitor, name: 'IT', mapped: 'it', value: '$11M/Yr' }
];

interface HeroSectionProps {
    onDepartmentClick?: (dept: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDepartmentClick }) => {
    return (
        <section
            style={{
                paddingTop: 'var(--spacing-16)',
                paddingBottom: 'var(--spacing-16)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background glow effects */}
            <div style={{
                position: 'absolute', top: '-10%', left: '20%', width: '50vw', height: '50vw',
                background: 'radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, rgba(2, 8, 19, 0) 70%)',
                zIndex: 0, pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="flex-col gap-12" style={{ alignItems: 'center' }}>
                    
                    {/* Top Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', marginBottom: 'var(--spacing-12)' }}
                    >
                        <Badge variant="blue" pulse className="mb-4" style={{ marginBottom: 'var(--spacing-4)' }}>
                            DPIIT-Recognized Enterprise AI Platform
                        </Badge>
                        <h1 style={{ fontSize: 'var(--font-size-5xl)', letterSpacing: '-0.02em', marginBottom: 'var(--spacing-4)' }}>
                            AI Agents for Enterprise Functions <br/>
                            <span className="text-gradient" style={{ fontSize: 'var(--font-size-4xl)' }}>- Outputs $150M+ Annual Value</span>
                        </h1>
                        <p style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-8)', lineHeight: 1.5 }}>
                            Stop manual processes. Our autonomous agentic platform deploys 23 core agents that work 24/7. Proven ROI in 50+ enterprises across North America, EMEA, and APAC.
                        </p>

                        <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center' }}>
                            <a href="#functions" className="btn btn-primary" style={{ padding: '0.85rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: 'var(--font-size-lg)' }}>
                                Find Your AI Agents
                                <MoveRight size={20} />
                            </a>
                            <a href="#roi" className="btn btn-secondary" style={{ padding: '0.85rem 2rem', display: 'flex', alignItems: 'center', textDecoration: 'none', fontSize: 'var(--font-size-lg)' }}>
                                See Full ROI Breakdown
                            </a>
                        </div>
                    </motion.div>

                    {/* 7-Card Function Navigator Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ marginBottom: 'var(--spacing-16)' }}
                    >
                        <div style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                            gap: 'var(--spacing-4)',
                            maxWidth: '1100px',
                            margin: '0 auto'
                        }}>
                            {departments.map((dept) => {
                                const Icon = dept.icon;
                                return (
                                    <motion.div
                                        key={dept.name}
                                        className="glass-panel"
                                        onClick={() => onDepartmentClick && onDepartmentClick(dept.mapped)}
                                        whileHover={{ y: -5, borderColor: 'var(--color-secondary)', boxShadow: 'var(--shadow-glow)' }}
                                        style={{
                                            padding: 'var(--spacing-6) var(--spacing-4)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            gap: 'var(--spacing-3)',
                                            cursor: 'pointer',
                                            background: 'rgba(15, 30, 56, 0.4)',
                                            border: '1px solid rgba(0, 212, 255, 0.15)',
                                            borderRadius: 'var(--radius-lg)'
                                        }}
                                    >
                                        <div style={{ 
                                            width: '48px', height: '48px', 
                                            borderRadius: '50%', 
                                            background: 'rgba(0, 212, 255, 0.1)', 
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'var(--color-secondary)'
                                        }}>
                                            <Icon size={24} />
                                        </div>
                                        <h3 style={{ fontSize: 'var(--font-size-base)', fontWeight: 700, color: '#fff' }}>{dept.name}</h3>
                                        <div style={{ color: '#10B981', fontSize: 'var(--font-size-sm)', fontWeight: 600 }}>{dept.value}</div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Trust Bar Directly Below Hero */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{
                            maxWidth: '1000px',
                            margin: '0 auto',
                            padding: 'var(--spacing-6)',
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 'var(--spacing-8)',
                            flexWrap: 'wrap'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                            <Building2 size={32} style={{ color: 'var(--color-text-muted)' }} />
                            <div>
                                <div style={{ color: '#fff', fontWeight: 700, fontSize: 'var(--font-size-lg)' }}>50+ Enterprise Clients</div>
                                <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>Transforming operations globally</div>
                            </div>
                        </div>

                        <div style={{ width: '1px', height: '40px', background: 'rgba(255, 255, 255, 0.1)' }}></div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                            <TrendingUp size={32} style={{ color: 'var(--color-success)' }} />
                            <div>
                                <div style={{ color: '#fff', fontWeight: 700, fontSize: 'var(--font-size-lg)' }}>$5.5B+</div>
                                <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>Combined Client Revenue Protected</div>
                            </div>
                        </div>
                        
                        <div style={{ width: '1px', height: '40px', background: 'rgba(255, 255, 255, 0.1)' }}></div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                            <Shield size={32} style={{ color: 'var(--color-secondary)' }} />
                            <div>
                                <div style={{ color: '#fff', fontWeight: 700, fontSize: 'var(--font-size-lg)' }}>ISO 27001 / SOC 2</div>
                                <div style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>Certified Security</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
