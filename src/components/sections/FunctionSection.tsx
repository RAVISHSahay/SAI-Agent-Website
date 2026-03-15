import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Users,
    Cog, Computer, FileText, Activity, Network, Database, Plug
} from 'lucide-react';
import { VerticalTabs, type Tab } from '../ui/VerticalTabs';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

const functionTabs: Tab[] = [
    { id: 'mydecision-studio', label: 'MyDecision Studio', icon: Network, color: '#FF0055' },
    { id: 'rag', label: 'Retrieval-Augmented Gen', icon: Database, color: '#8B5CF6' },
    { id: 'testing', label: 'Testing & Simulation', icon: Activity, color: '#00D4FF' },
    { id: 'deployment', label: 'Deployment & CI/CD', icon: Computer, color: '#10B981' },
    { id: 'integration', label: 'Enterprise Integration', icon: Cog, color: '#F59E0B' },
    { id: 'connectors', label: 'Integrations & Connectors', icon: Plug, color: '#F43F5E' },
    { id: 'security', label: 'Security & Governance', icon: ShieldCheck, color: '#8B5CF6' },
    { id: 'analytics', label: 'Analytics & Insights', icon: FileText, color: '#EC4899' },
    { id: 'more', label: 'More', icon: FileText, color: '#3B82F6' }
];

export const FunctionSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('mydecision-studio');
    const [zoomLevel, setZoomLevel] = useState(1);

    const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 1.5));
    const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));

    const renderContent = () => {
        switch (activeTab) {
            case 'mydecision-studio':
                return (
                    <div className="flex-col gap-6 w-full">
                        <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-4)' }}>
                            <div>
                                <Badge variant="purple" className="mb-2">Visual RETE Canvas</Badge>
                                <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>MyDecision Studio</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>
                                    Drag from palette to add. Double-click nodes to edit. Compile to bytecode.
                                </p>
                            </div>
                            <div className="text-right">
                                <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Powered By</div>
                                <div className="text-gradient-accent" style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 800 }}>React Flow</div>
                            </div>
                        </div>

                        <div className="glass-panel" style={{ height: '420px', background: '#030303', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', position: 'relative', overflow: 'hidden' }}>
                            {/* Dot Grid Background */}
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(#333 1.5px, transparent 1.5px)', backgroundSize: `${20 * zoomLevel}px ${20 * zoomLevel}px`, backgroundPosition: 'center center', zIndex: 0, transition: 'background-size 0.2s' }}></div>

                            {/* Scalable Container */}
                            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', transform: `scale(${zoomLevel})`, transformOrigin: 'center center', transition: 'transform 0.2s', zIndex: 1 }}>
                                {/* SVG Connectors */}
                                <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
                                    {/* Trigger to Condition */}
                                    <path d="M 230 170 C 255 170, 255 170, 280 170" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="5,5" />
                                    <polygon points="275,166 280,170 275,174" fill="#3B82F6" />

                                    {/* Condition YES to Action */}
                                    <path d="M 480 150 C 520 150, 520 90, 560 90" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" />
                                    <polygon points="555,86 560,90 555,94" fill="#10B981" />

                                    {/* Condition NO to Action */}
                                    <path d="M 480 220 C 515 220, 515 280, 550 280" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" />
                                    <polygon points="545,276 550,280 545,284" fill="#EF4444" />
                                </svg>

                                {/* Node 1: Trigger */}
                                <div className="studio-node" style={{
                                    position: 'absolute', left: '30px', top: '120px', width: '200px',
                                    background: 'rgba(17, 24, 39, 0.8)', backdropFilter: 'blur(4px)',
                                    border: '2px solid #10B981', borderRadius: '8px', zIndex: 2,
                                    boxShadow: '0 0 15px rgba(16, 185, 129, 0.2)'
                                }}>
                                    <div style={{ padding: '8px 12px', borderBottom: '2px solid #10B981', fontSize: '11px', fontWeight: 'bold', color: '#fff', letterSpacing: '0.05em' }}>
                                        TRIGGER <span style={{ float: 'right', color: '#10B981' }}>⚡</span>
                                    </div>
                                    <div style={{ padding: '12px' }}>
                                        <div style={{ color: '#fff', fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>Invoice Ingested</div>
                                        <div style={{ color: '#9CA3AF', fontSize: '12px', marginBottom: '8px' }}>Webhook payload</div>
                                        <div style={{ border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '4px', padding: '4px 8px', fontSize: '10px', color: '#10B981', background: 'rgba(16, 185, 129, 0.1)', display: 'inline-block' }}>
                                            A2A Event Bus
                                        </div>
                                    </div>
                                    <div className="pulse-handle" style={{ position: 'absolute', right: '-6px', top: '50px', width: '12px', height: '12px', background: '#10B981', borderRadius: '50%', border: '2px solid #fff' }}></div>
                                </div>

                                {/* Node 2: Condition */}
                                <div className="studio-node" style={{
                                    position: 'absolute', left: '280px', top: '110px', width: '200px',
                                    background: 'rgba(17, 24, 39, 0.8)', backdropFilter: 'blur(4px)',
                                    border: '2px solid #3B82F6', borderRadius: '8px', zIndex: 2,
                                    boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)'
                                }}>
                                    <div style={{ position: 'absolute', left: '-6px', top: '60px', width: '12px', height: '12px', background: '#3B82F6', borderRadius: '50%', border: '2px solid #fff' }}></div>

                                    <div style={{ padding: '8px 12px', borderBottom: '2px solid #3B82F6', fontSize: '11px', fontWeight: 'bold', color: '#fff', letterSpacing: '0.05em' }}>
                                        CONDITION <span style={{ float: 'right', color: '#3B82F6' }}>⑂</span>
                                    </div>
                                    <div style={{ padding: '12px' }}>
                                        <div style={{ color: '#fff', fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>Approval Rules</div>
                                        <div style={{ color: '#9CA3AF', fontSize: '12px', marginBottom: '8px' }}>Logic gate evaluation</div>
                                        <div style={{ border: '1px solid #3B82F6', borderRadius: '4px', padding: '4px 8px', fontSize: '10px', color: '#fff', textAlign: 'center', background: 'rgba(59, 130, 246, 0.1)' }}>
                                            Amount &gt; $50,000
                                        </div>
                                    </div>

                                    <div style={{ position: 'absolute', right: '-6px', top: '40px', width: '12px', height: '12px', background: '#10B981', borderRadius: '50%', border: '2px solid #fff' }}></div>
                                    <div style={{ position: 'absolute', right: '-24px', top: '38px', fontSize: '10px', color: '#10B981', fontWeight: 'bold' }}>YES</div>

                                    <div style={{ position: 'absolute', right: '-6px', top: '110px', width: '12px', height: '12px', background: '#EF4444', borderRadius: '50%', border: '2px solid #fff' }}></div>
                                    <div style={{ position: 'absolute', right: '-22px', top: '108px', fontSize: '10px', color: '#EF4444', fontWeight: 'bold' }}>NO</div>
                                </div>

                                {/* Node 3: Action YES */}
                                <div className="studio-node" style={{
                                    position: 'absolute', left: '560px', top: '30px', width: '200px',
                                    background: 'rgba(17, 24, 39, 0.8)', backdropFilter: 'blur(4px)',
                                    border: '2px solid #8B5CF6', borderRadius: '8px', zIndex: 2,
                                    boxShadow: '0 0 15px rgba(139, 92, 246, 0.2)'
                                }}>
                                    <div style={{ position: 'absolute', left: '-6px', top: '60px', width: '12px', height: '12px', background: '#8B5CF6', borderRadius: '50%', border: '2px solid #fff' }}></div>
                                    <div style={{ padding: '8px 12px', borderBottom: '2px solid #8B5CF6', fontSize: '11px', fontWeight: 'bold', color: '#fff', letterSpacing: '0.05em' }}>
                                        ACTION <span style={{ float: 'right', color: '#8B5CF6' }}>⚙</span>
                                    </div>
                                    <div style={{ padding: '12px' }}>
                                        <div style={{ color: '#fff', fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>Route to CFO</div>
                                        <div style={{ color: '#9CA3AF', fontSize: '12px' }}>Human-in-the-loop intercept via Teams/Slack.</div>
                                    </div>
                                </div>

                                {/* Node 4: Action NO */}
                                <div className="studio-node" style={{
                                    position: 'absolute', left: '550px', top: '220px', width: '200px',
                                    background: 'rgba(17, 24, 39, 0.8)', backdropFilter: 'blur(4px)',
                                    border: '2px solid #F59E0B', borderRadius: '8px', zIndex: 2,
                                    boxShadow: '0 0 15px rgba(245, 158, 11, 0.2)'
                                }}>
                                    <div style={{ position: 'absolute', left: '-6px', top: '60px', width: '12px', height: '12px', background: '#F59E0B', borderRadius: '50%', border: '2px solid #fff' }}></div>
                                    <div style={{ padding: '8px 12px', borderBottom: '2px solid #F59E0B', fontSize: '11px', fontWeight: 'bold', color: '#fff', letterSpacing: '0.05em' }}>
                                        ACTION <span style={{ float: 'right', color: '#F59E0B' }}>→</span>
                                    </div>
                                    <div style={{ padding: '12px' }}>
                                        <div style={{ color: '#fff', fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>Auto-Approve</div>
                                        <div style={{ color: '#9CA3AF', fontSize: '12px' }}>Push to SAP S/4HANA for immediate payment run.</div>
                                    </div>
                                </div>
                            </div>

                            {/* React Flow Controls Mock */}
                            <div style={{ position: 'absolute', bottom: '15px', left: '15px', display: 'flex', gap: '5px', zIndex: 3 }}>
                                <div onClick={handleZoomIn} style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}>+</div>
                                <div onClick={handleZoomOut} style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}>−</div>
                            </div>
                            <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '80px', height: '60px', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', zIndex: 3 }}>
                                {/* Mini-map mock */}
                                <div style={{ position: 'absolute', top: '15px', left: '10px', width: '15px', height: '10px', background: '#10B981', borderRadius: '2px', opacity: 0.8 }}></div>
                                <div style={{ position: 'absolute', top: '15px', left: '35px', width: '15px', height: '10px', background: '#3B82F6', borderRadius: '2px', opacity: 0.8 }}></div>
                                <div style={{ position: 'absolute', top: '5px', left: '55px', width: '15px', height: '10px', background: '#8B5CF6', borderRadius: '2px', opacity: 0.8 }}></div>
                                <div style={{ position: 'absolute', top: '25px', left: '55px', width: '15px', height: '10px', background: '#F59E0B', borderRadius: '2px', opacity: 0.8 }}></div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mt-6">
                            <Card title="Visual Editing" subtitle="Drag-and-drop nodes to construct business logic visually." icon={Network} />
                            <Card title="High Performance" subtitle="Compiles directly to optimized bytecode for execution." icon={Activity} />
                            <Card title="Extensible" subtitle="Built on React Flow with custom edge/node support." icon={Computer} />
                        </div>
                    </div>
                );

            case 'rag':
                return (
                    <div className="flex-col gap-6 w-full">
                        <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-4)' }}>
                            <div>
                                <Badge variant="purple" className="mb-2">Knowledge Integration</Badge>
                                <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>Retrieval-Augmented Generation (RAG)</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>
                                    Ground your autonomous agents in enterprise truth. Connect securely to vector databases, internal documents, and proprietary knowledge graphs.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Card
                                title="Vector Database Sync"
                                icon={Database}
                                subtitle="Natively integrate with Pinecone, Milvus, and pgvector to retrieve semantic context in milliseconds before agent execution."
                            />
                            <Card
                                title="Multi-modal Ingestion"
                                icon={FileText}
                                subtitle="Ingest and chunk PDFs, Word docs, internal wikis, and SharePoint repositories automatically into intelligent embeddings."
                            />
                            <Card
                                title="Hallucination Prevention"
                                icon={ShieldCheck}
                                subtitle="Strict citation constraints force agents to ground all output and decisions in referenced, enterprise-verified documentation."
                            />
                            <Card
                                title="Real-time Knowledge Graph"
                                icon={Network}
                                subtitle="Dynamically map relationships across structured and unstructured enterprise data to provide deep context to every AI workflow."
                            />
                        </div>
                    </div>
                );

            case 'testing':
                return (
                    <div className="flex-col gap-6 w-full">
                        <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-4)' }}>
                            <div>
                                <Badge variant="blue" className="mb-2">Zero-Risk Validation</Badge>
                                <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>Testing & Simulation</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>
                                    Validate autonomous agent logic with synthetic data before pushing to production. Guarantee 99.9% accuracy before go-live.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Card
                                title="Synthetic Data Generation"
                                icon={Activity}
                                subtitle="Instantly generates realistic enterprise data payloads to stress-test your agent workflows under thousands of edge cases automatically without exposing PII."
                            />
                            <Card
                                title="A/B Logic Testing"
                                icon={Network}
                                subtitle="Run parallel versions of an agent to compare decision accuracy, latency, and performance metrics. Built-in shadow mode execution protects live data."
                            />
                            <Card
                                title="Automated Regression Suites"
                                icon={ShieldCheck}
                                subtitle="Every agent update automatically triggers full-scale regression testing against historical edge cases to ensure no backwards-breaking changes occur."
                            />
                            <Card
                                title="Load & Stress Simulation"
                                icon={Computer}
                                subtitle="Simulate 100,000+ parallel API events hitting the agent cluster to guarantee performance SLAs during intense enterprise peak loads."
                            />
                        </div>
                    </div>
                );

            case 'deployment':
                return (
                    <div className="flex-col gap-6 w-full">
                        <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-4)' }}>
                            <div>
                                <Badge variant="green" className="mb-2">Enterprise Scale</Badge>
                                <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>Deployment & CI/CD</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>
                                    Robust, one-click deployment pipelines designed for mission-critical AI workflows running across multi-cloud environments.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Card
                                title="Zero-Downtime Updates"
                                icon={Computer}
                                subtitle="Deploy updated agent logic and new knowledge bases without interrupting ongoing automated processes. Uses blue/green deployment natively."
                            />
                            <Card
                                title="Version Control & Rollback"
                                icon={FileText}
                                subtitle="Maintain a complete, auditable history of all agent configurations. Instant one-click rollback capabilities if anomalies are detected within 5 minutes."
                            />
                            <Card
                                title="Multi-Cloud Native Config"
                                icon={Network}
                                subtitle="Deploy agents directly to AWS Mumbai, Azure India Central, or GCP seamlessly using containerized Docker/Kubernetes architecture."
                            />
                            <Card
                                title="Automated Approval Gates"
                                icon={ShieldCheck}
                                subtitle="Define specific C-suite or IT management approval gateways that must be passed before a new agent iteration hits the production environment."
                            />
                        </div>
                    </div>
                );

            case 'integration':
                return (
                    <div className="flex-col gap-6 w-full">
                        <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-4)' }}>
                            <div>
                                <Badge variant="warning" className="mb-2">Seamless Connectivity</Badge>
                                <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>Enterprise Integration</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>
                                    Connect AI agents to your existing tech stack without tearing and replacing. 150+ native REST/SOAP integrations.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Card
                                title="Pre-built Connectors"
                                icon={Cog}
                                subtitle="Out-of-the-box native integration for SAP S/4HANA, Oracle ERP, Salesforce, Workday, ServiceNow, and Microsoft Dynamics."
                            />
                            <Card
                                title="Custom API Gateway"
                                icon={Network}
                                subtitle="Secure REST/GraphQL endpoints allowing agents to interface naturally with specialized legacy systems, mainframes, and proprietary databases."
                            />
                            <Card
                                title="Event-Driven Webhooks"
                                icon={Activity}
                                subtitle="Trigger agent workflows instantly based on real-time external events, such as an email arriving in Outlook or a Jira ticket state change."
                            />
                            <Card
                                title="Data Normalization Layer"
                                icon={FileText}
                                subtitle="Automatically clean and structure incoming unstructured data (PDFs, images, emails) before the agent processes logic."
                            />
                        </div>
                    </div>
                );

            case 'connectors':
                return (
                    <div className="flex-col gap-6 w-full">
                        <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-4)' }}>
                            <div>
                                <Badge variant="warning" className="mb-2">150+ Native Integrations</Badge>
                                <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>Integrations & Connectors</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)', maxWidth: '700px' }}>
                                    Plug and play your autonomous agents directly into your existing enterprise tech stack. Integration with <strong>any Source or Destination application</strong> is possible with zero middleware required.
                                </p>
                            </div>
                        </div>

                        <div className="glass-panel" style={{ padding: 'var(--spacing-6)' }}>
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* ERP & Finance */}
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Database size={18} color="#10B981" /> ERP & Finance
                                    </h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9CA3AF', gap: '8px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', fontSize: '0.9rem' }}>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>SAP S/4HANA & ECC</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>Oracle NetSuite</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>Oracle Cloud ERP</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>Microsoft Dynamics 365 Finance</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>Workday Financial Management</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>Coupa Business Spend Management</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>SAP Ariba & Fieldglass</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>Sage Intacct</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>Epicor ERP</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>Infor CloudSuite</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>Intuit QuickBooks Enterprise</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>Xero Accounting</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>Stripe Billing & Payments</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>Zuora Subscription Management</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }}></div>Expensify & Concur</li>
                                    </ul>
                                </div>

                                {/* CRM & Service */}
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Users size={18} color="#3B82F6" /> CRM & Service
                                    </h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9CA3AF', gap: '8px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', fontSize: '0.9rem' }}>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>Salesforce Sales/Service Cloud</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>Salesforce Marketing Cloud</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>ServiceNow ITSM & CSM</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>HubSpot CRM Platform</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>Zendesk Support Suite</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>Jira Service Management</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>Microsoft Dynamics 365 Sales</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>SAP Customer Experience (CX)</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>Workday HCM & HR Service</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>Intercom Customer Communications</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>Freshworks (Freshdesk/Freshservice)</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>Adobe Experience Cloud</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>Pipedrive CRM</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>Marketo Engage & Pardot</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3B82F6', flexShrink: 0 }}></div>Qualtrics XM & SurveyMonkey Enterprise</li>
                                    </ul>
                                </div>

                                {/* Data & Cloud */}
                                <div>
                                    <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600, marginBottom: 'var(--spacing-4)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Network size={18} color="#8B5CF6" /> Data & Cloud
                                    </h4>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9CA3AF', gap: '8px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', fontSize: '0.9rem' }}>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>Snowflake Data Cloud</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>Databricks Lakehouse Platform</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>Amazon Web Services (S3, Redshift)</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>Google Cloud Platform (BigQuery)</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>Microsoft Azure (Data Factory, Synapse)</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>Pinecone & Milvus (Vector DBs)</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>PostgreSQL / MySQL / Oracle DB</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>MongoDB & Neo4j</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>Confluent Kafka Event Streaming</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>MuleSoft Anypoint Platform</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>Boomi Enterprise Integration</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>Workato & Zapier Enterprise</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>Splunk & Datadog Observability</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>GitHub, GitLab, & Bitbucket</li>
                                        <li className="flex items-center gap-2" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8B5CF6', flexShrink: 0 }}></div>Slack & Microsoft Teams</li>
                                    </ul>
                                </div>
                            </div>

                            <div style={{ marginTop: 'var(--spacing-8)', padding: 'var(--spacing-4)', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div className="flex items-center gap-3">
                                    <Plug className="text-gray-400" />
                                    <span style={{ color: '#9CA3AF', fontSize: '0.9rem' }}>Plus universal support for Custom REST API, GraphQL, Webhooks, and SOAP XML out-of-the-box.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'security':
                return (
                    <div className="flex-col gap-6 w-full">
                        <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-4)' }}>
                            <div>
                                <Badge variant="purple" className="mb-2">Bank-Grade Compliance</Badge>
                                <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>Security & Governance</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>
                                    Strict guardrails ensuring sovereign control over all autonomous operations. SOC2 Type II and ISO 27001 certified.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Card
                                title="Role-Based Access (RBAC)"
                                icon={Users}
                                subtitle="Define granular permissions dictating exactly who can view, edit, test, or publish specific agent workflows across the organization."
                            />
                            <Card
                                title="Immutable Audit Trails"
                                icon={ShieldCheck}
                                subtitle="Cryptographically secure logs of every decision made and action taken by an AI agent, ensuring full traceability for compliance officers."
                            />
                            <Card
                                title="Human-in-the-Loop Intercepts"
                                icon={Activity}
                                subtitle="Force agents to pause and request human authorization for transactions exceeding dynamic risk thresholds (e.g. transfers over $50k)."
                            />
                            <Card
                                title="Data Sovereignty & KMS"
                                icon={Computer}
                                subtitle="Bring your own Key Management Service (AWS KMS / Azure Key Vault). 100% data processing remains localized to your geographical requirements."
                            />
                        </div>
                    </div>
                );

            case 'analytics':
                return (
                    <div className="flex-col gap-6 w-full">
                        <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-4)' }}>
                            <div>
                                <Badge variant="blue" className="mb-2">Executive Telemetry</Badge>
                                <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>Analytics & Insights</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>
                                    Total operational transparency across 100% of autonomous business activities.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Card
                                title="Real-Time ROI Dashboards"
                                icon={Activity}
                                subtitle="Live tracking of working capital unlocked, hours saved, and exact dollar value generated by each individual AI agent in production."
                            />
                            <Card
                                title="Anomaly Detection Algorithms"
                                icon={ShieldCheck}
                                subtitle="Automatically highlights systemic deviations in vendor pricing or payment timings that human teams would statistically miss."
                            />
                            <Card
                                title="Agent Bottleneck Analysis"
                                icon={Network}
                                subtitle="Visual heatmaps of your RETE workflows to identify exactly which external API or database is currently slowing down operation time."
                            />
                            <Card
                                title="Custom Exec Reports"
                                icon={FileText}
                                subtitle="Auto-generated monthly PDF breakdowns sent directly to the C-suite detailing cross-departmental automation saturation metrics."
                            />
                        </div>
                    </div>
                );

            case 'more':
                return (
                    <div className="flex-col gap-6 w-full">
                        <div className="flex justify-between items-start" style={{ marginBottom: 'var(--spacing-4)' }}>
                            <div>
                                <Badge variant="blue" className="mb-2">Advanced Capabilities</Badge>
                                <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>More Platform Features</h3>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>
                                    Explore the full breadth of our autonomous AI toolset designed for specialized enterprise requirements.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <Card
                                title="Autonomous Automation"
                                icon={Cog}
                                subtitle="Beyond traditional RPA. Intelligent workflows that adapt to UI changes, handle exceptions dynamically, and learn from human intervention."
                            />
                            <Card
                                title="Templateless Data Extraction"
                                icon={Database}
                                subtitle="Extract structured JSON data from highly unstructured documents (invoices, contracts, emails) without predefined OCR templates."
                            />
                            <Card
                                title="Multi-modal Document Intelligence"
                                icon={FileText}
                                subtitle="Process text, images, and tables simultaneously. Cross-reference extracted data against live ERP records instantly."
                            />
                            <Card
                                title="Event-Driven Orchestration"
                                icon={Network}
                                subtitle="Trigger complex AI agent activities based on webhooks, database state changes, or even inbound email attachments."
                            />
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="flex items-center justify-center p-12 glass-panel" style={{ minHeight: '400px' }}>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>
                            Comprehensive Agent documentation loading for {functionTabs.find(t => t.id === activeTab)?.label}...
                        </p>
                    </div>
                );
        }
    };

    return (
        <section id="functions" style={{ padding: 'var(--spacing-16) 0', position: 'relative' }}>
            <div className="container">
                <div className="flex-col items-center justify-center text-center mb-12" style={{ marginBottom: 'var(--spacing-12)' }}>
                    <Badge variant="blue" className="mb-4" style={{ marginBottom: 'var(--spacing-4)' }}>Platform Capabilities</Badge>
                    <h2 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-4)' }}>
                        End-to-End Autonomous AI
                    </h2>
                    <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        From visual agent design in MyDecision Studio to rigorous simulation, enterprise deployment, and strict security governance, explore everything SequelString AI offers.
                    </p>
                </div>

                <VerticalTabs tabs={functionTabs} activeTab={activeTab} onChange={setActiveTab}>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={activeTab}
                        style={{ padding: '0 var(--spacing-8)' }}
                    >
                        {renderContent()}
                    </motion.div>
                </VerticalTabs>
            </div>
        </section>
    );
};
