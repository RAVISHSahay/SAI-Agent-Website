import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ShoppingCart, PieChart, ShieldCheck, Users,
    Cog, TrendingUp, Monitor, CheckCircle2, XOctagon, Target, Activity, FileText
} from 'lucide-react';
import { VerticalTabs, type Tab } from '../ui/VerticalTabs';
import { Badge } from '../ui/Badge';
import { Card } from '../ui/Card';

const functionTabs: Tab[] = [
    { id: 'procurement', label: 'Procurement & Supply Chain', icon: ShoppingCart, color: '#3B82F6' },
    { id: 'finance', label: 'Finance & Accounting', icon: PieChart, color: '#10B981' },
    { id: 'compliance', label: 'Compliance & Risk', icon: ShieldCheck, color: '#F59E0B' },
    { id: 'hr', label: 'HR & Administration', icon: Users, color: '#EC4899' },
    { id: 'operations', label: 'Operations & Projects', icon: Cog, color: '#8B5CF6' },
    { id: 'sales', label: 'Sales & BD', icon: TrendingUp, color: '#00D4FF' },
    { id: 'it', label: 'IT & Technology', icon: Monitor, color: '#635BFF' }
];

interface FunctionSectionProps {
    activeDepartment?: string;
}

const PainPointsBox = ({ points }: { points: string[] }) => (
    <div className="glass-panel" style={{ padding: 'var(--spacing-6)', borderLeft: '3px solid #EF4444' }}>
        <h4 style={{ fontSize: 'var(--font-size-base)', fontWeight: 600, color: '#EF4444', marginBottom: 'var(--spacing-3)' }}>Pain Points Addressed</h4>
        <ul className="flex-col gap-2" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-sm)' }}>
            {points.map((pt, i) => (
                <li key={i} className="flex gap-2 items-start"><XOctagon size={16} className="mt-1 flex-shrink-0" /> {pt}</li>
            ))}
        </ul>
    </div>
);

interface AgentCardProps {
    title: string;
    icon: any;
    subtitle: string;
    valuePoints: string[];
    example?: string;
    className?: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ title, icon: Icon, subtitle, valuePoints, example, className = '' }) => (
    <Card title={title} icon={Icon} subtitle={subtitle} className={className}>
        <div className="mt-4 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
            <div className="text-sm font-semibold mb-2" style={{ color: '#10B981' }}>Value Creation</div>
            <ul className="text-xs text-gray-400 space-y-1 mb-3">
                {valuePoints.map((vp: string, i: number) => <li key={i}>• {vp}</li>)}
            </ul>
            {example && (
                <>
                    <div className="text-xs font-semibold mb-1 text-gradient-accent">Real Example</div>
                    <p className="text-xs text-gray-300 italic">"{example}"</p>
                </>
            )}
        </div>
    </Card>
);

export const FunctionSection: React.FC<FunctionSectionProps> = ({ activeDepartment }) => {
    const [activeTab, setActiveTab] = useState(activeDepartment || 'procurement');

    const renderContent = () => {
        switch (activeTab) {
            case 'procurement':
                return (
                    <div className="flex-col gap-8 w-full">
                        <div className="flex-col gap-4">
                            <Badge variant="blue" className="mb-2">₹478.6 Cr/year value | 3 AI Agents</Badge>
                            <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>Procurement & Supply Chain AI Agents</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>For CPOs, Procurement Heads, Supply Chain Managers</p>
                        </div>
                        <PainPointsBox points={[
                            'Manual PR processing (5 days → 1.5 days with AI)',
                            'Vendor performance tracking across 500+ suppliers',
                            '20% excess inventory (₹200 Cr locked working capital)',
                            'Stock-out delays (8 incidents/year @ ₹1.5 Cr each)',
                            'Invoice discrepancies (15-day reconciliation cycle)'
                        ]} />
                        <div className="grid md:grid-cols-2 gap-6">
                            <AgentCard title="PR Optimizer Agent" icon={Target} subtitle="Auto-analyzes project BOQ. Predicts material requirements using ML (trained on 66 EPC + 13 HAM projects). Flags anomalies like duplicates or spec mismatches." valuePoints={['30% faster PR processing', '₹40 Cr working capital unlocking', '₹12 Cr delay cost avoidance']} example="PNC Infratech: AI predicted 2,500 MT cement vs manual 3,200 MT for Pune Ring Road project → 22% over-ordering prevented → ₹28 L saved." />
                            <AgentCard title="Vendor Intelligence Agent" icon={Users} subtitle="Auto-ranks 500+ vendors using 4-criteria scoring (Price, Delivery, Quality, Terms). Monitors contract compliance and scrapes GSTIN/MCA for risk scoring." valuePoints={['₹400 Cr procurement cost savings', '₹25 Cr vendor delay avoidance', '₹24 Cr early payment discounts']} example="Manufacturing client with ₹2,800 Cr annual procurement: AI identified vendor consolidation opportunity → bulk discount of 8% → ₹180 Cr savings over 3 years." />
                            <AgentCard title="Invoice Reconciliation Agent" icon={CheckCircle2} subtitle="Auto-matches PO → GRN → Invoice (3-way match). Handles price/quantity variance checks and intelligent exception routing." valuePoints={['70% faster invoice processing', '₹5.6 Cr labor cost savings', '₹24 Cr early payment discounts', '15% dispute reduction']} example="Jubilant FoodWorks: Processes 12,000 invoices/month. AI reduced AP team from 18 to 5 people, saved ₹4.2 Cr/year in labor + ₹18 Cr in early payment discounts." className="md:col-span-2" />
                        </div>
                    </div>
                );
            case 'finance':
                return (
                    <div className="flex-col gap-8 w-full">
                        <div className="flex-col gap-4">
                            <Badge variant="green" className="mb-2">₹220 Cr/year value | 4 AI Agents</Badge>
                            <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>Finance & Accounting AI Agents</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>For CFOs, Finance Controllers, Accounts Heads</p>
                        </div>
                        <PainPointsBox points={[
                            'Debtor days: 114 days (industry benchmark: 90 days)',
                            '₹185 Cr working capital locked in receivables',
                            'Manual RA bill generation (20 man-days/month for 30 projects)',
                            '90-day cash flow forecasting (Excel-based, error-prone)'
                        ]} />
                        <div className="grid md:grid-cols-2 gap-6">
                            <AgentCard title="Billing Accelerator Agent" icon={Activity} subtitle="Auto-generates RA Bills from DPR milestone data. API integration with NHAI payment portal for submission. Debtor days tracking with auto-follow-ups." valuePoints={['₹100 Cr working capital unlocking', '30% faster billing cycle', '₹8 Cr interest savings']} example="PNC Infratech: AI auto-generated 180 RA bills/year. Debtor days improved from 114 to 96 in 6 months → ₹65 Cr WC unlocked." />
                            <AgentCard title="Claims Recovery Agent" icon={ShieldCheck} subtitle="Analyzes 500+ NHAI arbitration precedents. Auto-drafts claim letters with legal citations and tracks statute of limitations deadlines." valuePoints={['₹72 Cr arbitration recovery', '40% faster claim drafting', '₹5 Cr legal fee savings']} example="Infrastructure client: AI identified 12 escalation claims worth ₹45 Cr approaching statute of limitations. 9/12 approved → ₹38 Cr recovered." />
                            <AgentCard title="Treasury Optimization Agent" icon={PieChart} subtitle="90-day rolling cash flow forecast mapping historical data via LSTM. Prescribes optimal debt-equity mix recommendations for project funding." valuePoints={['₹40 Cr treasury optimization', 'Zero liquidity crises', '50% CFO time savings']} example="FMCG client: Recommended 70% debt + 30% equity mix for Q4 expansion → saved ₹12 Cr in interest over 2 years." />
                            <AgentCard title="Financial Close Agent" icon={CheckCircle2} subtitle="Auto-reconciles bank statements with GL. Classifies 120+ expense categories using NLP. Automates month-end accrual entries." valuePoints={['60% faster month-end close', '₹8 Cr finance team cost savings', '95% accuracy in GL coding']} />
                        </div>
                    </div>
                );
            case 'compliance':
                return (
                    <div className="flex-col gap-8 w-full">
                        <div className="flex-col gap-4">
                            <Badge variant="warning" className="mb-2">₹32 Cr/year value | 3 AI Agents</Badge>
                            <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>Compliance & Risk Management AI Agents</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>For Compliance Heads, Legal Heads, Risk Managers</p>
                        </div>
                        <PainPointsBox points={[
                            'GST compliance across 20+ GSTINs (manual reconciliation errors)',
                            'ITC utilization at 85% (vs 95% possible with AI)',
                            'Environmental compliance tracking (PM10 monitoring, forestry)',
                            'Labor compliance for 500+ contractors (CLRA, ESIC, EPF)'
                        ]} />
                        <div className="grid md:grid-cols-2 gap-6">
                            <AgentCard title="GST Compliance Agent" icon={FileText} subtitle="Auto-reconciles GSTR-2A vs purchase ledger. Identifies unutilized credits to optimize ITC. Handles E-way bill auto-generation." valuePoints={['₹12 Cr GST optimization', '₹8 Cr ITC unlocking', '₹1 Cr penalty avoidance']} example="Infrastructure company (22 GSTINs): AI identified ₹42 Cr unutilized ITC over 18 months via auto-reconciliation." />
                            <AgentCard title="Environmental Compliance Agent" icon={Target} subtitle="GPS-tagged tracking of afforestation. Real-time PM10 limits monitoring via IoT sensors. Auto-generates compliance reports for MoEF&CC." valuePoints={['₹14 Cr environmental compliance value', '₹8 Cr penalty avoidance', '₹6 Cr compliance premium on orders']} example="HAM project: PM10 sensors active at 8 zones → auto-spraying when PM10 >150 μg/m³. Zero CPCB violations over 24-month project." />
                            <AgentCard title="Labour Compliance Agent" icon={Users} subtitle="CLRA license tracking for 500+ contractors. ESIC/EPF reconciliation automation to identify contribution defaults and wage compliance." valuePoints={['₹4 Cr penalty avoidance', '₹2 Cr cost savings via reduced manual compliance tracking']} className="md:col-span-2" />
                        </div>
                    </div>
                );
            case 'hr':
                return (
                    <div className="flex-col gap-8 w-full">
                        <div className="flex-col gap-4">
                            <Badge variant="purple" className="mb-2">₹45 Cr/year value | 2 AI Agents</Badge>
                            <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>HR & Administration AI Agents</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>For CHROs, HR Heads, Admin Managers</p>
                        </div>
                        <PainPointsBox points={[
                            'Employee onboarding (15-day process, 40% incomplete documentation)',
                            'Payroll errors (2-3% error rate, ₹8 L rework/month)',
                            'Leave management (manual Excel tracking, 200+ emails/month)',
                            'Employee queries (HR team spends 40% time answering repetitive questions)'
                        ]} />
                        <div className="grid md:grid-cols-2 gap-6">
                            <AgentCard title="Employee Lifecycle Agent" icon={Users} subtitle="Automates onboarding generation, leave deduction calculations (LOP), background verifications via third-party APIs, and final settlement calculations." valuePoints={['₹25 Cr HR efficiency value', '₹12 Cr payroll accuracy', '₹15 Cr attrition reduction via predictive exit alerts']} example="Manufacturing company: Onboarded 1,200 employees. HR ops team reduced 35 → 12 FTE. Real-time predictive analytics saved 45 at-risk employees." />
                            <AgentCard title="HR Chatbot & Self-Service Agent" icon={CheckCircle2} subtitle="24/7 conversational bot handling 200+ policy queries. Integrates into MS Teams / WhatsApp for instant leave application processing and tax computation." valuePoints={['₹5 Cr HR service desk cost savings', '80% query resolution via chatbot', '<2 min avg response time']} example="IT company (4,500 employees): Chatbot handles 18,000 queries/month. HR desk 15 → 4 people. Employee NPS 45 → 78." />
                        </div>
                    </div>
                );
            case 'operations':
                return (
                    <div className="flex-col gap-8 w-full">
                        <div className="flex-col gap-4">
                            <Badge variant="blue" className="mb-2">₹112 Cr/year value | 3 AI Agents</Badge>
                            <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>Operations & Project Management AI Agents</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>For COOs, Project Managers, Operations Heads</p>
                        </div>
                        <PainPointsBox points={[
                            'Real-time project visibility (DPRs analyzed manually, 2-day lag)',
                            'Equipment downtime (5% fleet idle due to unplanned failures)',
                            'Quality defects discovered late (costly rework, client penalties)'
                        ]} />
                        <div className="grid md:grid-cols-2 gap-6">
                            <AgentCard title="Project Pulse Agent" icon={Activity} subtitle="Real-time DPR ingestion via OCR and predictive delay alerts based on Random Forest ML trained on historical milestones." valuePoints={['₹51 Cr project execution value', '₹31 Cr early completion bonuses', '₹20 Cr delay avoidance']} example="PNC Infratech: Hardoi Bypass completed 168 days early → ₹19 Cr bonus. AI tracked critical path bottlenecks 45 days in advance." />
                            <AgentCard title="Predictive Maintenance Agent" icon={Cog} subtitle="IoT sensor integration tracking vibration anomalies and bearing wear. Auto-scheduling for preventive service downtime." valuePoints={['₹35 Cr fleet optimization value', '₹15 Cr unplanned downtime reduction', '20% utilization improvement']} example="Construction company: AI predicted hydraulic failure on Excavator #E-247 → replaced during weekend → avoided 5-day delay." />
                            <AgentCard title="Defect Detection Agent" icon={Target} subtitle="Computer vision passing over drone footage and assessing lab test reports (OCR) for concrete/bitumen defect classifications." valuePoints={['₹26 Cr quality value', '95% defect detection rate', '₹10 Cr penalty avoidance']} className="md:col-span-2" />
                        </div>
                    </div>
                );
            case 'sales':
                return (
                    <div className="flex-col gap-8 w-full">
                        <div className="flex-col gap-4">
                            <Badge variant="blue" className="mb-2">₹207.5 Cr/year value | 3 AI Agents</Badge>
                            <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>Sales & Business Development AI Agents</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>For CROs, Sales Heads, Bid Managers</p>
                        </div>
                        <PainPointsBox points={[
                            'Tender discovery (miss 30% opportunities, manual checks)',
                            'Bid preparation (15 days/tender, labor-intensive BOQ extraction)',
                            'Bid pricing (conservative/aggressive estimates leave money on the table)'
                        ]} />
                        <div className="grid md:grid-cols-2 gap-6">
                            <AgentCard title="Tender Scout Agent" icon={Target} subtitle="Auto-scrapes 50+ portals (NHAI, PWD, GeM). Bid-No-Bid scoring based on 12 criteria (order book capacity, region, equipment available)." valuePoints={['₹7.5 Cr bid efficiency value', '100% tender coverage', '50% faster bid decision']} example="Won 18 tenders (40% win rate vs 28%) worth ₹4,200 Cr. AI detected ₹850 Cr NH-48 tender 11:47 PM Friday." />
                            <AgentCard title="BOQ Builder Agent" icon={CheckCircle2} subtitle="Computer Vision extracts quantities from PDF drawings (e.g. 127-page tender). Auto-calculates material requirements dynamically." valuePoints={['₹120 Cr BOQ accuracy value', '₹40 Cr overrun avoidance']} example="₹850 Cr NH-48 tender: AI extracted quantities from 127-page drawing in 4 hrs (vs 12 days). Suggested precast value engineering → won tender." />
                            <AgentCard title="Bid Risk Analyzer Agent" icon={TrendingUp} subtitle="Monte Carlo simulations (10,000 iterations) considering margin analysis, historical competitor intelligence, and risk premiums." valuePoints={['₹80 Cr bid optimization value', '₹50 Cr PAT from incremental wins']} className="md:col-span-2" />
                        </div>
                    </div>
                );
            case 'it':
                return (
                    <div className="flex-col gap-8 w-full">
                        <div className="flex-col gap-4">
                            <Badge variant="purple" className="mb-2">₹35 Cr/year value | 2 AI Agents</Badge>
                            <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-2)' }}>IT & Technology AI Agents</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-lg)' }}>For CIOs, IT Heads, Technology Leaders</p>
                        </div>
                        <PainPointsBox points={[
                            'SAP maintenance (manual master data updates, 2-day lag)',
                            'System integration failures (API errors, data sync issues)',
                            'IT service desk load (40% repetitive queries: password resets)'
                        ]} />
                        <div className="grid md:grid-cols-2 gap-6">
                            <AgentCard title="SAP & ERP Automation Agent" icon={Monitor} subtitle="Master Data Management auto-updates vendor masters. Transaction Automation for PO creation, GRNs, and Journal entries via SAP RFC." valuePoints={['₹25 Cr SAP efficiency value', '₹15 Cr IT ops cost savings', '70% faster transaction processing']} example="Manufacturing company (₹6,800 Cr): Auto-created 18,000 POs/year. Finance close 15 days → 7 days." />
                            <AgentCard title="IT Service Desk Agent" icon={CheckCircle2} subtitle="Chatbot for password resets, VPN troubleshooting, and automated ticket classification (P1/P2) inside ServiceNow." valuePoints={['₹10 Cr IT service desk value', '85% ticket auto-resolution', 'Avg resolution time: 24 hrs → 2 hrs']} example="IT company (4,500 employees): Chatbot handles 22,000 tickets/month. IT service desk reduced from 18 to 6 people." />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="functions" style={{ padding: 'var(--spacing-16) 0', position: 'relative' }}>
            <div className="container">
                <div className="flex-col items-center justify-center text-center mb-12" style={{ marginBottom: 'var(--spacing-12)' }}>
                    <Badge variant="blue" className="mb-4" style={{ marginBottom: 'var(--spacing-4)' }}>Function-Wise Showcase</Badge>
                    <h2 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-4)' }}>
                        AI Agents for 7 Enterprise Functions
                    </h2>
                    <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        Specialized autonomous agents targeting specific workflows inside Procurement, Finance, Operations, IT, and more.
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
