import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';
import { Building2, Search, Activity, ShieldCheck, Rocket, Maximize, CheckCircle2, Factory, Landmark } from 'lucide-react';

const stats = [
    { value: "50+", label: "Enterprise Clients" },
    { value: "₹47,000+ Cr", label: "Combined Client Revenue" },
    { value: "13", label: "States Covered in India" },
    { value: "100+", label: "Employees at SAI" }
];

const deploymentSteps = [
    {
        icon: Search,
        title: "1. Discovery & Blueprinting",
        duration: "Weeks 1-2",
        desc: "Identifying high-ROI processes and mapping secure API integrations with your existing ERP/CRM."
    },
    {
        icon: Activity,
        title: "2. Shadow Mode Pilot",
        duration: "Weeks 3-4",
        desc: "AI agents run in parallel with your human teams reading real-time data with zero execution risk."
    },
    {
        icon: ShieldCheck,
        title: "3. User Acceptance Testing",
        duration: "Weeks 5-6",
        desc: "Rigorous edge-case testing, threshold fine-tuning, and stakeholder sign-offs."
    },
    {
        icon: Rocket,
        title: "4. Production Go-Live",
        duration: "Week 7",
        desc: "Agents execute autonomously with Human-in-the-Loop (HITL) intercepts for high-value exceptions."
    },
    {
        icon: Maximize,
        title: "5. Scale & Optimize",
        duration: "Ongoing",
        desc: "Expanding agent capabilities across new departments based on real-world ROI telemetry."
    }
];

const caseStudies = [
    {
        client: "PNC Infratech",
        industry: "Infrastructure",
        icon: Building2,
        challenge: "Debtor days at 114, ₹4,000 Cr in procurement spend, and manual contract processing.",
        solution: "Procurement AI + Cash Flow AI",
        impact: [
            "₹1,280 Cr annual value generated",
            "₹185 Cr working capital unlocked (debtor days 114 → 96)",
            "42,567% projected ROI over 5 years"
        ],
        quote: "Deploying SequelString AI's agents transformed our finance operations. The AI predicted material requirements with 96% accuracy, preventing ₹40 Cr in excess inventory.",
        color: "#00D4FF"
    },
    {
        client: "Jubilant FoodWorks",
        industry: "FMCG / Retail",
        icon: Landmark,
        challenge: "12,000 invoices/month across 500+ suppliers creating massive Procure-to-Report bottlenecks.",
        solution: "Invoice Processing AI + Procurement AI",
        impact: [
            "₹478 Cr Procure-to-Report value",
            "AP team reduced from 18 FTE → 5 FTE",
            "603% ROI with a 5.6-month payback"
        ],
        quote: "SequelString AI's invoice processing agent improved accuracy from 94% to 98%. The 3-way match automation processes 12,000 invoices per month with zero friction.",
        color: "#10B981"
    },
    {
        client: "Tier-1 Manufacturer",
        industry: "Automotive",
        icon: Factory,
        challenge: "SAP maintenance overhead and reactive fleet management for ₹1,300 Cr in assets.",
        solution: "SAP Automation AI + Fleet Health AI",
        impact: [
            "₹172 Cr annual value unlocked",
            "20% fleet utilization improvement",
            "95% defect detection rate (vs 70% manual)"
        ],
        quote: "Our SAP master data updates are now instant, and predictive maintenance stopped a ₹15 Cr potential downtime event before it occurred.",
        color: "#8B5CF6"
    }
];

const logos = [
    "Delhi Metro (DMRC)", "KPMG India", "Hero MotoCorp", "Vodafone India",
    "Jubilant FoodWorks", "PNC Infratech", "HDFC Bank", "Larsen & Toubro",
    "Tata Motors", "Infosys", "Adani Group", "Mahindra"
];

export const SuccessStoriesSection: React.FC = () => {
    return (
        <section id="trust" style={{ padding: 'var(--spacing-32) 0 var(--spacing-20) 0', background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
            <div className="container">
                {/* Stats Bar */}
                <div className="glass-panel text-center" style={{ padding: 'var(--spacing-8)', marginBottom: 'var(--spacing-24)', background: 'linear-gradient(90deg, rgba(0,212,255,0.05) 0%, rgba(16,185,129,0.05) 100%)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="grid md:grid-cols-4 gap-8 divide-x divide-gray-800">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex-col items-center justify-center p-4">
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', fontFamily: 'monospace', marginBottom: '8px' }}>
                                    {stat.value}
                                </div>
                                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-col items-center justify-center text-center mb-16">
                    <Badge variant="blue" className="mb-4">Social Proof</Badge>
                    <h2 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-4)' }}>
                        Trusted by Leading Enterprises
                    </h2>
                    <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        From infrastructure to FMCG, manufacturing to government — AI agents proven across critical sectors.
                    </p>
                </div>

                {/* Client Logo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
                    {logos.map((logo, idx) => (
                        <div key={idx} className="glass-panel flex items-center justify-center" style={{ height: '100px', padding: 'var(--spacing-4)', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', filter: 'grayscale(100%)', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}>
                            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff', opacity: 0.8 }}>{logo}</span>
                        </div>
                    ))}
                </div>

                {/* Case Studies */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    {caseStudies.map((study, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-panel flex-col"
                            style={{ padding: 'var(--spacing-8)', borderTop: `4px solid ${study.color}` }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div style={{ padding: '12px', background: `${study.color}15`, borderRadius: '12px', color: study.color }}>
                                    <study.icon size={28} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>{study.client}</h3>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{study.industry}</span>
                                </div>
                            </div>

                            <p style={{ fontSize: '0.95rem', color: '#D1D5DB', marginBottom: 'var(--spacing-6)', fontStyle: 'italic', borderLeft: `2px solid ${study.color}`, paddingLeft: '12px' }}>
                                "{study.quote}"
                            </p>

                            <div className="mt-auto pt-4 border-t border-gray-800">
                                <h4 style={{ fontSize: '0.8rem', color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Proven Impact</h4>
                                <ul className="flex-col gap-2">
                                    {study.impact.map((point, i) => (
                                        <li key={i} className="flex gap-2 items-start text-sm text-gray-300">
                                            <CheckCircle2 size={16} color={study.color} className="flex-shrink-0 mt-0.5" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Deployment Process */}
                <div className="flex-col items-center justify-center text-center mb-16">
                    <Badge variant="green" className="mb-4">Seamless Integration</Badge>
                    <h2 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-4)' }}>
                        The 5-Step Deployment Framework
                    </h2>
                    <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        Enterprise-grade AI deployed securely in Production in just 7 weeks, with zero disruption to your existing IT operations.
                    </p>
                </div>

                <div className="relative" style={{ padding: 'var(--spacing-8) 0' }}>
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[50%] left-[10%] right-[10%] h-1 bg-gradient-to-r from-[#00D4FF] via-[#10B981] to-[#8B5CF6]" style={{ zIndex: 0, opacity: 0.3 }} />

                    <div className="grid md:grid-cols-5 gap-6 relative z-10">
                        {deploymentSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-panel flex-col items-center text-center"
                                style={{ padding: 'var(--spacing-6)', background: 'rgba(5, 12, 25, 0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)' }}
                            >
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-4)', color: '#fff' }}>
                                    <step.icon size={24} />
                                </div>
                                <div style={{ color: '#00D4FF', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                                    {step.duration}
                                </div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>
                                    {step.title}
                                </h3>
                                <p style={{ fontSize: '0.85rem', color: '#9CA3AF', lineHeight: 1.5 }}>
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ISO/Certifications Trust Banner */}
                <div className="mt-20 glass-panel flex flex-col md:flex-row items-center justify-between" style={{ padding: 'var(--spacing-8)', border: '1px solid rgba(16, 185, 129, 0.2)', background: 'rgba(16, 185, 129, 0.05)' }}>
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <ShieldCheck size={40} color="#10B981" />
                        <div>
                            <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700 }}>Bank-Grade Security & Governance</h4>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>ISO 27001 Certified • SOC 2 Type II Compliant • GDPR Ready</p>
                        </div>
                    </div>
                    <div>
                        <a href="#contact" className="btn btn-outline" style={{ borderColor: '#10B981', color: '#10B981' }}>View Compliance Docs</a>
                    </div>
                </div>

            </div>
        </section>
    );
};
