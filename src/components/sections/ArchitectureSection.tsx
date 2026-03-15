import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart, GitMerge, Brain, Database, Server, Users, CreditCard, Cloud, LayoutDashboard, Globe } from 'lucide-react';
import { SiSap, SiSalesforce } from 'react-icons/si';
import { GrOracle } from 'react-icons/gr';
import { Badge } from '../ui/Badge';

const architectureLayers = [
    {
        id: 'layer-5',
        title: 'LAYER 5: SECURITY, GOVERNANCE & COMPLIANCE',
        icon: Shield,
        color: '#F59E0B',
        description: 'ISO 27001 & SOC 2 certified security protocols ensuring end-to-end data safety.',
        components: ['AES-256 Encryption', 'Zero-Trust Access Control', 'Immutable Audit Trails', 'DPDP / GDPR Mappers', 'Automated DR/BCP']
    },
    {
        id: 'layer-4',
        title: 'LAYER 4: MONITORING, ANALYTICS & FEEDBACK',
        icon: BarChart,
        color: '#00D4FF',
        description: 'Provide executives with real-time financial transparency and anomaly alerts.',
        components: ['Stream Processing Metrics', 'CFO Executive Dashboards', 'Continuous Learning Loops', 'Auto Model Retraining']
    },
    {
        id: 'layer-3',
        title: 'LAYER 3: WORKFLOW ORCHESTRATION & AUTOMATION',
        icon: GitMerge,
        color: '#10B981',
        description: 'Intelligent process routing and execution layer handling mission-critical jobs.',
        components: ['Apache Airflow / Kafka', 'RPA Hand-offs', 'Action Executors', 'Intelligent Routing', 'Microsecond SLA Management']
    },
    {
        id: 'layer-2',
        title: 'LAYER 2: AI PROCESSING & DECISION ENGINE',
        icon: Brain,
        color: '#635BFF',
        description: 'The cognitive core running highly specialized models for deterministic outcomes.',
        components: ['XGBoost / Random Forest', 'NLP (Enterprise LLMs)', 'Computer Vision (YOLOv5)', 'Business Rule Enforcers']
    },
    {
        id: 'layer-1',
        title: 'LAYER 1: DATA INTEGRATION & INGESTION',
        icon: Database,
        color: '#EC4899',
        description: 'Secure, high-bandwidth pipelines connecting deeply with legacy enterprise systems.',
        components: ['SAP RFC / BAPI Connectors', 'REST / GraphQL APIs', 'Legacy Database Drivers', 'Enterprise OCR Engine', 'Schema Validation']
    }
];

export const ArchitectureSection: React.FC = () => {
    return (
        <section id="architecture" style={{ padding: 'var(--spacing-16) 0', backgroundColor: 'var(--color-surface)' }}>
            <div className="container">
                <div className="flex-col items-center justify-center text-center mb-12" style={{ marginBottom: 'var(--spacing-12)' }}>
                    <Badge variant="purple" className="mb-4" style={{ marginBottom: 'var(--spacing-4)' }}>Technical Architecture</Badge>
                    <h2 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-4)' }}>
                        How AI Agents Work
                    </h2>
                    <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        SequelX AI platform is built on a modular, scalable 5-layer enterprise architecture ensuring reliability, security, and performance.
                    </p>
                </div>

                <div className="flex-col" style={{ gap: 'var(--spacing-4)', maxWidth: '900px', margin: '0 auto' }}>
                    {architectureLayers.map((layer, index) => {
                        const Icon = layer.icon;
                        return (
                            <motion.div
                                key={layer.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-panel"
                                style={{
                                    position: 'relative',
                                    padding: 'var(--spacing-6)',
                                    borderLeft: `4px solid ${layer.color}`,
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Subtle background glow based on layer color */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-50%', right: '-10%',
                                    width: '300px', height: '300px',
                                    background: `radial-gradient(circle, ${layer.color}15 0%, transparent 60%)`,
                                    zIndex: 0,
                                    pointerEvents: 'none'
                                }} />

                                <div className="flex gap-6 items-center" style={{ position: 'relative', zIndex: 1 }}>
                                    <div style={{
                                        padding: 'var(--spacing-4)',
                                        background: `rgba(255, 255, 255, 0.05)`,
                                        borderRadius: 'var(--radius-lg)',
                                        color: layer.color
                                    }}>
                                        <Icon size={32} />
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--spacing-2)' }}>
                                            {layer.title}
                                        </h3>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)', marginBottom: 'var(--spacing-4)', lineHeight: 1.5 }}>
                                            {layer.description}
                                        </p>
                                        <div className="flex" style={{ gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
                                            {layer.components.map(comp => (
                                                <span
                                                    key={comp}
                                                    style={{
                                                        fontSize: 'var(--font-size-sm)',
                                                        padding: 'var(--spacing-1) var(--spacing-3)',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        border: '1px solid var(--glass-border)',
                                                        borderRadius: 'var(--radius-sm)',
                                                        color: 'var(--color-text-muted)'
                                                    }}
                                                >
                                                    {comp}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Base Enterprise Systems Layer */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        style={{
                            padding: 'var(--spacing-6)',
                            marginTop: 'var(--spacing-4)',
                            borderTop: '2px dashed var(--color-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 'var(--spacing-4)'
                        }}
                    >
                        <div className="flex items-center gap-2 text-gradient" style={{ fontSize: 'var(--font-size-xl)', fontWeight: 600 }}>
                            <Server size={24} />
                            ENTERPRISE SYSTEMS
                        </div>
                        <div className="flex" style={{ gap: 'var(--spacing-6)', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {[
                                { name: 'SAP S/4HANA (ERP)', icon: SiSap },
                                { name: 'Oracle NetSuite (Finance)', icon: GrOracle },
                                { name: 'Microsoft Dynamics 365', icon: Server },
                                { name: 'Salesforce CRM', icon: SiSalesforce },
                                { name: 'HubSpot CRM', icon: Cloud },
                                { name: 'Workday HCM', icon: Users },
                                { name: 'SuccessFactors (HR)', icon: Users },
                                { name: 'QuickBooks Enterprise', icon: CreditCard },
                                { name: 'ServiceNow (ITSM)', icon: LayoutDashboard },
                                { name: 'Snowflake (Data)', icon: Database },
                                { name: 'AWS / Azure / GCP', icon: Globe },
                            ].map(sys => (
                                <div key={sys.name} className="flex items-center gap-2" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-base)', fontWeight: 500 }}>
                                    <sys.icon size={20} />
                                    {sys.name}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
