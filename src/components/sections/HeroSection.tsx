import React from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp, Calculator, Users,
    MoveRight, Headset, PieChart, Briefcase, FileCheck, ClipboardCheck,
    Shield, ShoppingCart, Lightbulb, Target, Receipt, Handshake, BookOpen, Layers
} from 'lucide-react';
import { Badge } from '../ui/Badge';

const functionsList = [
    { icon: Calculator, name: 'Accounting', mapped: 'Accounting', agents: 15 },
    { icon: Headset, name: 'Support', mapped: 'Customer Service / Support', agents: 20 },
    { icon: PieChart, name: 'Finance', mapped: 'Finance', agents: 18 },
    { icon: Briefcase, name: 'Leadership', mapped: 'General Management / Executive Leadership', agents: 10 },
    { icon: Users, name: 'HR', mapped: 'Human Resources', agents: 25 },
    { icon: FileCheck, name: 'ICOFR', mapped: 'ICOFR - Internal Control on Financial Reporting', agents: 12 },
    { icon: ClipboardCheck, name: 'Audit', mapped: 'Internal Audit', agents: 8 },
    { icon: Shield, name: 'Compliance', mapped: 'Legal & Statutory Compliance', agents: 14 },
    { icon: ShoppingCart, name: 'Procurement', mapped: 'Procurement & Sourcing', agents: 22 },
    { icon: Lightbulb, name: 'R&D', mapped: 'Research & Development / Product Management', agents: 30 },
    { icon: TrendingUp, name: 'Sales', mapped: 'Sales', agents: 18 },
    { icon: Target, name: 'PreSales', mapped: 'Sales & PreSales Excellence', agents: 12 },
    { icon: Receipt, name: 'Taxation', mapped: 'Taxation', agents: 11 },
    { icon: Handshake, name: 'Vendors', mapped: 'Vendor Lifecycle Management', agents: 16 },
    { icon: BookOpen, name: 'Fin Close', mapped: 'Financial Close & Consolidation', agents: 9 },
    { icon: Layers, name: 'Supply Chain', mapped: 'Supply Chain Management', agents: 25 }
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
                <div className="grid" style={{ gridTemplateColumns: '42% 58%', gap: 'var(--spacing-8)', alignItems: 'center' }}>

                    {/* Left Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-col gap-6"
                        style={{ paddingRight: '2rem' }}
                    >
                        <div>
                            <Badge variant="blue" pulse className="mb-4" style={{ marginBottom: 'var(--spacing-4)' }}>
                                DPIIT-Recognized Enterprise AI
                            </Badge>
                            <h1 style={{ fontSize: 'var(--font-size-5xl)', letterSpacing: '-0.02em', marginBottom: 'var(--spacing-6)' }}>
                                AI Agents for Every <span className="text-gradient">Enterprise Function</span>
                            </h1>
                            <p style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-muted)', maxWidth: '600px', marginBottom: 'var(--spacing-4)' }}>
                                Autonomous AI agents that automate procurement, finance, compliance, HR, operations, sales, and IT functions. Built for enterprises with $60M+ revenue.
                            </p>
                            <p style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-text-muted)', maxWidth: '500px', marginBottom: 'var(--spacing-8)' }}>
                                Stop manual processes. Our agentic AI platform deploys 600+ specialized agents that work 24/7. Proven 42,567% ROI in 5 years at 50+ enterprises across 15+ industry segments including Public Sector and Manufacturing.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a href="#functions" className="btn btn-primary" style={{ padding: '0.75rem 1.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                                Find AI Agents
                                <MoveRight size={18} />
                            </a>
                            <a href="#roi" className="btn btn-secondary" style={{ padding: '0.75rem 1.75rem', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                                See Full ROI Breakdown
                            </a>
                        </div>

                        {/* Enterprise Trust Badge */}
                        <div style={{ marginTop: 'var(--spacing-8)', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(0, 212, 255, 0.05)', border: '1px solid rgba(0, 212, 255, 0.2)', borderRadius: 'var(--radius-lg)' }}>
                            <Shield size={24} style={{ color: '#00D4FF' }} />
                            <div>
                                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.5px' }}>ISO 27001 & SOC 2 Type 2 Certified</div>
                                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }}>Enterprise-Grade Data Security & Compliance</div>
                            </div>
                        </div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-3 gap-6" style={{ marginTop: 'var(--spacing-8)', borderTop: '1px solid var(--glass-border)', paddingTop: 'var(--spacing-8)' }}>
                            <div>
                                <div className="text-gradient-accent" style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, whiteSpace: 'nowrap' }}>$150M</div>
                                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Annual Value Created</div>
                            </div>
                            <div>
                                <div className="text-gradient-accent" style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, whiteSpace: 'nowrap' }}>{'<'}2 Weeks</div>
                                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Payback Period</div>
                            </div>
                            <div>
                                <div className="text-gradient-accent" style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 800, whiteSpace: 'nowrap' }}>600+</div>
                                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Specialized AI Agents</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual: Enterprise Function Hub Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ position: 'relative', height: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '4rem' }}
                    >
                        <div className="glass-panel" style={{
                            position: 'absolute',
                            width: '180px', height: '180px',
                            borderRadius: '50%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            flexDirection: 'column',
                            zIndex: 10,
                            boxShadow: 'var(--shadow-glow-accent)',
                            border: '2px solid rgba(99, 91, 255, 0.3)'
                        }}>
                            <div style={{ fontWeight: 800, fontSize: 'var(--font-size-xl)' }}>SequelX</div>
                            <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-secondary)' }}>AI Platform Hub</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', color: '#fff', fontWeight: 600, marginTop: '4px', letterSpacing: '0.5px' }}>600+ Agents</div>
                        </div>

                        {/* Orbiting nodes */}
                        {functionsList.map((fn, i) => {
                            // Start from top (-90 degrees) and distribute evenly
                            const angle = (-90 + (i * (360 / functionsList.length))) * (Math.PI / 180);
                            const radius = 330; // distance from center
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;

                            const Icon = fn.icon;

                            return (
                                <motion.div
                                    key={fn.name}
                                    className="glass-panel"
                                    onClick={() => onDepartmentClick && onDepartmentClick(fn.mapped)}
                                    style={{
                                        position: 'absolute',
                                        width: '100px',
                                        padding: 'var(--spacing-2)',
                                        top: `calc(50% + ${y}px - 35px)`,
                                        left: `calc(50% + ${x}px - 50px)`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '4px',
                                        cursor: 'pointer',
                                        zIndex: 5,
                                        background: 'rgba(2, 8, 19, 0.9)',
                                        borderRadius: 'var(--radius-md)'
                                    }}
                                    whileHover={{ scale: 1.15, zIndex: 20, boxShadow: 'var(--shadow-glow)', borderColor: 'var(--color-secondary)' }}
                                >
                                    <Icon size={18} style={{ color: '#fff' }} strokeWidth={1.5} />
                                    <div style={{ fontSize: '11px', fontWeight: 600, color: '#fff', textAlign: 'center', lineHeight: 1.1 }}>{fn.name}</div>
                                    <div style={{ fontSize: '9px', color: 'var(--color-secondary)' }}>{fn.agents} Agents</div>
                                </motion.div>
                            );
                        })}

                        {/* Connecting lines via SVG */}
                        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
                            <defs>
                                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="rgba(0, 212, 255, 0.4)" />
                                    <stop offset="100%" stopColor="rgba(99, 91, 255, 0.1)" />
                                </linearGradient>
                            </defs>
                            {functionsList.map((_, i) => {
                                const angle = (-90 + (i * (360 / functionsList.length))) * (Math.PI / 180);
                                const radiusX = Math.cos(angle) * 330;
                                const radiusY = Math.sin(angle) * 330;
                                return (
                                    <motion.line
                                        key={`line-${i}`}
                                        x1="50%" y1="50%"
                                        x2={`calc(50% + ${radiusX}px)`} y2={`calc(50% + ${radiusY}px)`}
                                        stroke="url(#lineGrad)"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        animate={{ pathLength: 1, opacity: 1 }}
                                        transition={{ duration: 1.5, delay: i * 0.1 }}
                                    />
                                );
                            })}
                        </svg>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
