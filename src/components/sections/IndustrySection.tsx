import React from 'react';
import { motion } from 'framer-motion';

const industries = [
    {
        title: "Infrastructure & Construction",
        description: "AI agents for HAM/EPC projects: procurement optimization, equipment fleet management, DOT compliance, RA bill generation. Deployed successfully at leading $1.8B+ order book infrastructure conglomerates.",
        metrics: [
            { value: "$154M+", label: "Annual Value" },
            { value: "$22.2M", label: "WC Unlocking" }
        ]
    },
    {
        title: "Manufacturing & Automotive",
        description: "Supply chain AI agents, vendor performance tracking, quality control automation, preventive maintenance. Ideal for tier-1 automotive OEMs and large-scale discreet manufacturing networks.",
        metrics: [
            { value: "30%", label: "Cost Reduction" },
            { value: "90%", label: "Automation Rate" }
        ]
    },
    {
        title: "FMCG & Retail",
        description: "Procure-to-Report (P2R) transformation, demand forecasting, inventory optimization, vendor onboarding automation. Deployed at top national Quick Service Restaurant (QSR) chains and FMCG distributors.",
        metrics: [
            { value: "603%", label: "3-Year ROI" },
            { value: "5.6 Mo", label: "Payback Period" }
        ]
    },
    {
        title: "Government & Public Sector",
        description: "Metro operations AI (ticketing, asset management), GeM procurement automation, compliance monitoring. Deployed at major municipal mass transit and rail authorities.",
        metrics: [
            { value: "100%", label: "Compliance Rate" },
            { value: "24/7", label: "Agent Availability" }
        ]
    }
];

export const IndustrySection: React.FC = () => {
    return (
        <section id="industries" style={{ padding: 'var(--spacing-24) 0', borderTop: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
            <div className="container relative z-10">
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-16)' }}>
                    <h2 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-4)' }}>
                        Tailored for Key Industries
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Specialized AI agent configurations designed to solve the most complex challenges in major enterprise sectors.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: '#0a1120',
                                border: '1px solid rgba(0, 212, 255, 0.08)',
                                borderRadius: '16px',
                                padding: 'var(--spacing-8)',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)'
                            }}
                        >
                            <h3 style={{
                                color: '#00D4FF',
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                marginBottom: 'var(--spacing-4)',
                                letterSpacing: '0.02em',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <span>{industry.title}</span>
                                <span style={{
                                    opacity: 0.1,
                                    fontSize: '3rem',
                                    fontWeight: 900,
                                    fontFamily: 'monospace',
                                    lineHeight: 0,
                                    marginRight: '-10px'
                                }}>
                                    0{index + 1}
                                </span>
                            </h3>
                            <p style={{
                                color: '#9CA3AF',
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                                marginBottom: 'var(--spacing-8)',
                                flexGrow: 1
                            }}>
                                {industry.description}
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-6)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: 'var(--spacing-6)' }}>
                                {industry.metrics.map((metric, mIdx) => (
                                    <div key={mIdx}>
                                        <div style={{
                                            color: '#FFB000',
                                            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                            fontWeight: 800,
                                            fontFamily: 'monospace',
                                            letterSpacing: '-1px',
                                            lineHeight: 1,
                                            marginBottom: '8px'
                                        }}>
                                            {metric.value}
                                        </div>
                                        <div style={{ color: '#6B7280', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.5px' }}>
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
