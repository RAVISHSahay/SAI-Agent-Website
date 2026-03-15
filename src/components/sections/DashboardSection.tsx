import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HorizontalTabs } from '../ui/HorizontalTabs';
import { Shield, Server, Coins, Zap } from 'lucide-react';

interface DashboardSectionProps {
    onOpenDemo?: () => void;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({ onOpenDemo }) => {
    const [activeTab, setActiveTab] = useState('Platform Metrics');

    const tabs = ['Platform Metrics', 'Pricing Strategy', 'Deployment Models', 'Contact for Pricing'];

    return (
        <section id="dashboard" style={{ padding: 'var(--spacing-20) 0', background: 'rgba(2, 8, 19, 0.6)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}
                >
                    <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
                        <h2 style={{
                            color: '#fff',
                            fontSize: 'var(--font-size-3xl)',
                            fontWeight: 700,
                            marginBottom: 'var(--spacing-4)',
                            letterSpacing: '-0.02em'
                        }}>
                            Enterprise <span className="text-gradient">Economics &amp; Delivery</span>
                        </h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)', maxWidth: '600px', margin: '0 auto' }}>
                            Discover how SequelX scales across your organization, from transparent licensing to secure, on-premise infrastructure deployments.
                        </p>
                    </div>

                    <HorizontalTabs 
                        tabs={tabs} 
                        activeTab={activeTab} 
                        onTabChange={setActiveTab} 
                        specialTab="Contact for Pricing"
                        onSpecialTabClick={onOpenDemo}
                    />

                    <div style={{ position: 'relative', minHeight: '300px' }}>
                        <AnimatePresence mode="wait">
                            {activeTab === 'Platform Metrics' && (
                                <motion.div
                                    key="metrics"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-8)', textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: 'var(--spacing-12)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <div>
                                            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#00D4FF', fontFamily: 'monospace', lineHeight: 1, marginBottom: 'var(--spacing-3)' }}>412%</div>
                                            <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>3-Year ROI</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#00D4FF', fontFamily: 'monospace', lineHeight: 1, marginBottom: 'var(--spacing-3)' }}>$2.4M+</div>
                                            <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>Annual Value</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#00D4FF', fontFamily: 'monospace', lineHeight: 1, marginBottom: 'var(--spacing-3)' }}>600+</div>
                                            <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>AI Agents</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#00D4FF', fontFamily: 'monospace', lineHeight: 1, marginBottom: 'var(--spacing-3)' }}>&lt;5 <span style={{ fontSize: '60%' }}>Mo</span></div>
                                            <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>Payback Period</div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'Pricing Strategy' && (
                                <motion.div
                                    key="pricing"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="glass-panel" style={{ padding: 'var(--spacing-8)', borderRadius: '24px', borderTop: '4px solid #00D4FF' }}>
                                            <div className="flex items-center gap-3 mb-6">
                                                <Coins size={28} color="#00D4FF" />
                                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Outcome-Based Licensing</h3>
                                            </div>
                                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                                                Unlike standard SaaS models that charge per-seat regardless of utilization, SequelString AI operates on an enterprise consumption and value-share architecture. You only pay for the computational work the agents successfully execute.
                                            </p>
                                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                                <li style={{ display: 'flex', gap: '1rem', color: '#D1D5DB' }}><span style={{ color: '#00D4FF' }}>✓</span> <strong>Zero Per-User Fees:</strong> Unlimited enterprise users across your entire organization.</li>
                                                <li style={{ display: 'flex', gap: '1rem', color: '#D1D5DB' }}><span style={{ color: '#00D4FF' }}>✓</span> <strong>Gain-Share Option:</strong> Zero upfront cost options available for high-yield procurement implementations.</li>
                                                <li style={{ display: 'flex', gap: '1rem', color: '#D1D5DB' }}><span style={{ color: '#00D4FF' }}>✓</span> <strong>Transparent Compute:</strong> Flat-rate cloud ingestion costs with predictable scaling curves.</li>
                                            </ul>
                                        </div>
                                        
                                        <div className="glass-panel" style={{ padding: 'var(--spacing-8)', borderRadius: '24px', background: 'linear-gradient(145deg, rgba(8, 15, 30, 0.8) 0%, rgba(2, 6, 23, 0.9) 100%)' }}>
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1.5rem' }}>Typical Enterprise Journey</h3>
                                            
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                                <div style={{ borderLeft: '2px solid #374151', paddingLeft: '1.5rem', position: 'relative' }}>
                                                    <div style={{ position: 'absolute', left: '-5px', top: '5px', width: '8px', height: '8px', borderRadius: '50%', background: '#00D4FF' }}></div>
                                                    <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.25rem' }}>Phase 1: Pilot & Proof of Value (Weeks 1-4)</h4>
                                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Fixed custom setup fee. 1-2 Agent deployment in a controlled environment to establish baseline metrics and ROI.</p>
                                                </div>
                                                <div style={{ borderLeft: '2px solid #374151', paddingLeft: '1.5rem', position: 'relative' }}>
                                                    <div style={{ position: 'absolute', left: '-5px', top: '5px', width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></div>
                                                    <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.25rem' }}>Phase 2: Department Rollout (Months 2-3)</h4>
                                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Annual recurrent licensing kicks in. Department-wide adoption covering 15-20 core processes.</p>
                                                </div>
                                                <div style={{ borderLeft: '2px solid transparent', paddingLeft: '1.5rem', position: 'relative' }}>
                                                    <div style={{ position: 'absolute', left: '-5px', top: '5px', width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }}></div>
                                                    <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.25rem' }}>Phase 3: Multi-Divisional Scale (Month 4+)</h4>
                                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>Transition to outcome-based or volumetric enterprise tier. 100+ agents augmenting cross-functional workflows.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'Deployment Models' && (
                                <motion.div
                                    key="deploy"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid md:grid-cols-2 gap-8"
                                >
                                    <div className="glass-panel" style={{ padding: 'var(--spacing-8)', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                            <div style={{ background: 'rgba(99, 91, 255, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                                                <Shield color="#635BFF" size={24} />
                                            </div>
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Virtual Private Cloud (Dedicated)</h3>
                                        </div>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                            The fastest path to value. SequelX is hosted within uniquely isolated AWS/Azure instances specifically dedicated to your organization. Complete data segregation with enterprise-grade encryption at rest and in transit.
                                        </p>
                                        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>Time to Value</span>
                                            <span style={{ color: '#10B981', fontWeight: 600, fontSize: '0.85rem' }}>&lt; 2 Weeks</span>
                                        </div>
                                    </div>

                                    <div className="glass-panel" style={{ padding: 'var(--spacing-8)', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                                            <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '0.75rem', borderRadius: '12px' }}>
                                                <Server color="#F59E0B" size={24} />
                                            </div>
                                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>On-Premise / Client Cloud</h3>
                                        </div>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                            For highly-regulated environments (BFSI, Defense, Healthcare). We containerize the entire SequelX Agent platform and deploy it directly into your own infrastructure—zero data ever leaves your firewall.
                                        </p>
                                        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ color: '#9CA3AF', fontSize: '0.85rem' }}>Time to Value</span>
                                            <span style={{ color: '#F59E0B', fontWeight: 600, fontSize: '0.85rem' }}>4 - 6 Weeks</span>
                                        </div>
                                    </div>
                                    
                                    <div className="col-span-1 md:col-span-2 glass-panel" style={{ padding: '1.5rem var(--spacing-8)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(90deg, rgba(0, 212, 255, 0.05) 0%, rgba(99, 91, 255, 0.05) 100%)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <Zap size={20} color="#00D4FF" />
                                            <span style={{ fontWeight: 600 }}>Need a custom deployment architecture?</span>
                                        </div>
                                        <a href="#contact" className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', textDecoration: 'none' }}>
                                            Talk to Solutions Engineering
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
