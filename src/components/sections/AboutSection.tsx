import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
    return (
        <section id="about" style={{ padding: 'var(--spacing-32) 0', borderTop: '1px solid var(--glass-border)', position: 'relative' }}>
            <div className="container relative z-10" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-24)' }}>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: 'var(--spacing-4)', letterSpacing: '-0.02em' }}>
                        About <span style={{ color: 'var(--color-secondary)' }}>SequelString AI</span>
                    </h2>
                    <p style={{ color: '#00D4FF', fontSize: 'var(--font-size-2xl)', fontStyle: 'italic', fontWeight: 600, marginBottom: 'var(--spacing-6)' }}>
                        "Govern Smarter. Operate Leaner. Impact Greener."
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a 
                            href="/About_Us_SequelString_AI.dotx" 
                            download 
                            className="btn btn-secondary" 
                            style={{ 
                                display: 'inline-flex', alignItems: 'center', gap: '8px', 
                                padding: '0.75rem 1.5rem', textDecoration: 'none', 
                                background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.3)', color: '#00D4FF' 
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            Download Company Profile
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8" style={{ marginBottom: 'var(--spacing-12)' }}>
                    {/* Company Overview Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'rgba(15, 30, 56, 0.4)',
                            border: '1px solid rgba(0, 212, 255, 0.1)',
                            borderRadius: '24px',
                            padding: 'var(--spacing-12)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <h3 style={{ color: '#00D4FF', fontSize: 'var(--font-size-2xl)', fontWeight: 700, marginBottom: 'var(--spacing-6)', letterSpacing: '-0.01em' }}>
                            Global Scale, Proven Impact
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-12)' }}>
                            SequelString AI Pvt. Ltd. (SAI) is a DPIIT-recognized enterprise AI company headquartered in San Francisco, with a strategic presence in Delaware, USA. We deliver mission-critical, AI-driven digital transformation for Fortune 500s and government entities.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-6)', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 'var(--spacing-8)' }}>
                            <div>
                                <div style={{ color: '#fff', fontSize: 'var(--font-size-2xl)', fontWeight: 800, fontFamily: 'monospace' }}>120+</div>
                                <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500, marginTop: '4px' }}>Professionals</div>
                            </div>
                            <div>
                                <div style={{ color: '#fff', fontSize: 'var(--font-size-2xl)', fontWeight: 800, fontFamily: 'monospace' }}>35%</div>
                                <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500, marginTop: '4px' }}>Female Workforce</div>
                            </div>
                            <div>
                                <div style={{ color: '#fff', fontSize: 'var(--font-size-2xl)', fontWeight: 800, fontFamily: 'monospace' }}>50+</div>
                                <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500, marginTop: '4px' }}>Enterprise Clients</div>
                            </div>
                            <div>
                                <div style={{ color: '#fff', fontSize: 'var(--font-size-2xl)', fontWeight: 800, fontFamily: 'monospace' }}>40+</div>
                                <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500, marginTop: '4px' }}>AI Products</div>
                            </div>
                        </div>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                        {/* Mission & Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{
                                background: 'linear-gradient(145deg, rgba(8, 15, 30, 0.8) 0%, rgba(2, 6, 23, 0.9) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '24px',
                                padding: 'var(--spacing-10)'
                            }}
                        >
                            <h3 style={{ color: '#fff', fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--spacing-4)' }}>
                                Mission & Vision
                            </h3>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: 'var(--font-size-base)', marginBottom: 'var(--spacing-6)' }}>
                                <strong style={{ color: '#00D4FF' }}>Mission:</strong> To democratize enterprise-grade AI, enabling emerging market organizations to compete globally through intelligent process transformation and data-sovereign technology.
                            </p>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: 'var(--font-size-base)' }}>
                                <strong style={{ color: '#00D4FF' }}>Vision:</strong> Driving $2.1B+ in client value across North America, EMEA, and APAC as the preferred AI transformation partner for future-ready enterprises prioritizing governance and sustainability.
                            </p>
                        </motion.div>

                        {/* Leadership */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{
                                background: 'linear-gradient(145deg, rgba(8, 15, 30, 0.8) 0%, rgba(2, 6, 23, 0.9) 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '24px',
                                padding: 'var(--spacing-10)',
                                flexGrow: 1
                            }}
                        >
                            <h3 style={{ color: '#fff', fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--spacing-4)' }}>
                                Leadership
                            </h3>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: 'var(--font-size-base)' }}>
                                Led by <strong>Ravish, Founder & CEO</strong>, a Harvard Business School alumnus. Under his leadership, SAI aligns proven enterprise technology strategies with core values of innovation, integrity, and sustainable impact to build trusted partnerships.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
