import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';
import { Building2, Stethoscope, Briefcase, Landmark, Users, Computer, Cog } from 'lucide-react';

const stories = [
    {
        industry: "Global Retail Conglomerate",
        icon: Building2,
        challenge: "Supply chain disruptions leading to 14% stockout rates across 800+ stores during peak seasons.",
        solution: "Deployed autonomous Demand Forecasting and Inventory Rebalancing Agents querying 50+ localized POS databases in real-time.",
        impact: "Reduced supply chain latency by 35% and completely eliminated critical stockouts, unlocking $12M in tied-up working capital.",
        color: "#10B981"
    },
    {
        industry: "Tier-1 Investment Bank",
        icon: Landmark,
        challenge: "Manual reconciliation of 10,000+ daily cross-border trades causing severe T+1 compliance bottlenecks.",
        solution: "Implemented an Event-Driven Orchestration Agent to instantly cross-reference SWIFT messages directly against core banking ledgers.",
        impact: "Achieved 100% automated trade reconciliation with zero variance, eliminating $2.5M in annual regulatory fines.",
        color: "#3B82F6"
    },
    {
        industry: "Multinational Healthcare Network",
        icon: Stethoscope,
        challenge: "Patient onboarding and insurance authorization averaging 3+ hours due to unstructured legacy fax workflows.",
        solution: "Utilized Templateless Data Extraction Agents to parse unstructured medical histories and authorize claims via RPA automatically.",
        impact: "Slashed patient onboarding time from 3 hours to 4 minutes, increasing clinical staff capacity by 40% globally.",
        color: "#F43F5E"
    },
    {
        industry: "Leading Automotive Manufacturer",
        icon: Briefcase,
        challenge: "Reactive maintenance on factory floors resulting in unpredictable production halts costing $45k/hour.",
        solution: "Integrated IoT sensors with Predictive Maintenance AI Agents utilizing vector databases to spot anomaly patterns instantly.",
        impact: "Reduced unexpected factory downtime by 40%, generating $8.2M in annual operational savings.",
        color: "#8B5CF6"
    }
];

const departmentStories = [
    {
        department: "Finance & Accounting",
        icon: Landmark,
        challenge: "Month-end close cycle taking 12+ days due to fractured data across 4 legacy ERP systems.",
        solution: "Deployed Autonomous Reconciliation Agents to aggregate, match, and post journal entries across all ledgers continuously.",
        impact: "Accelerated financial close by 8 days and recovered 3,200 hours of analyst time annually.",
        color: "#10B981"
    },
    {
        department: "Human Resources",
        icon: Users,
        challenge: "Onboarding delays and manual compliance verification for 5,000+ contractors annually.",
        solution: "Implemented HR Orchestration Agents for end-to-end background checks, provisioning, and document processing.",
        impact: "Reduced onboarding time from 14 days to 48 hours and achieved 100% audit compliance.",
        color: "#8B5CF6"
    },
    {
        department: "IT & Infrastructure",
        icon: Computer,
        challenge: "L1 helpdesk overwhelmed by 15,000+ monthly password reset and access provisioning tickets.",
        solution: "Launched an Autonomous IT Service Agent integrated with ServiceNow and Active Directory.",
        impact: "Deflected 68% of L1 tickets instantly, saving $1.4M in outsourced support costs.",
        color: "#3B82F6"
    },
    {
        department: "Procurement & Supply Chain",
        icon: Cog,
        challenge: "Vendor invoice processing bottlenecked by manual OCR verification and 3-way matching errors.",
        solution: "Utilized Templateless Data Extraction Agents to process invoices and match POs automatically.",
        impact: "Increased straight-through processing (STP) from 12% to 89%, optimizing working capital.",
        color: "#F43F5E"
    }
];

export const SuccessStoriesSection: React.FC = () => {
    return (
        <section id="success-stories" style={{ padding: 'var(--spacing-32) 0 var(--spacing-20) 0', background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
            <div className="container">
                <div className="flex-col items-center justify-center text-center mb-12">
                    <Badge variant="blue" className="mb-4">Real World Impact</Badge>
                    <h2 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-4)' }}>
                        Enterprise Success Stories
                    </h2>
                    <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        Discover how global leaders across major industries and departments are leveraging SequelString SAI to drive unprecedented operational efficiency.
                    </p>
                </div>

                <h3 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-6)', marginTop: 'var(--spacing-12)', textAlign: 'center', color: 'var(--color-text)' }}>Industry Transformations</h3>
                <div className="grid grid-cols-2 gap-8" style={{ marginBottom: 'var(--spacing-16)' }}>
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel"
                            style={{
                                padding: 'var(--spacing-8)',
                                borderLeft: `4px solid ${story.color}`,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--spacing-4)'
                            }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div style={{
                                    padding: '8px',
                                    background: `${story.color}15`,
                                    borderRadius: '8px',
                                    color: story.color
                                }}>
                                    <story.icon size={24} />
                                </div>
                                <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600 }}>{story.industry}</h3>
                            </div>

                            <div>
                                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>The Challenge</span>
                                <p style={{ marginTop: '4px', fontSize: '0.95rem' }}>{story.challenge}</p>
                            </div>

                            <div>
                                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>The Solution</span>
                                <p style={{ marginTop: '4px', fontSize: '0.95rem' }}>{story.solution}</p>
                            </div>

                            <div style={{
                                marginTop: 'auto',
                                paddingTop: 'var(--spacing-4)',
                                borderTop: '1px solid var(--glass-border)',
                                color: story.color,
                                fontWeight: 500
                            }}>
                                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Impact</span>
                                {story.impact}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <h3 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-6)', marginTop: 'var(--spacing-16)', textAlign: 'center', color: 'var(--color-text)' }}>Departmental Excellence</h3>
                <div className="grid grid-cols-2 gap-8">
                    {departmentStories.map((story, index) => (
                        <motion.div
                            key={`dept-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel"
                            style={{
                                padding: 'var(--spacing-8)',
                                borderLeft: `4px solid ${story.color}`,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--spacing-4)'
                            }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div style={{
                                    padding: '8px',
                                    background: `${story.color}15`,
                                    borderRadius: '8px',
                                    color: story.color
                                }}>
                                    <story.icon size={24} />
                                </div>
                                <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600 }}>{story.department}</h3>
                            </div>

                            <div>
                                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>The Challenge</span>
                                <p style={{ marginTop: '4px', fontSize: '0.95rem' }}>{story.challenge}</p>
                            </div>

                            <div>
                                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>The Solution</span>
                                <p style={{ marginTop: '4px', fontSize: '0.95rem' }}>{story.solution}</p>
                            </div>

                            <div style={{
                                marginTop: 'auto',
                                paddingTop: 'var(--spacing-4)',
                                borderTop: '1px solid var(--glass-border)',
                                color: story.color,
                                fontWeight: 500
                            }}>
                                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Impact</span>
                                {story.impact}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
