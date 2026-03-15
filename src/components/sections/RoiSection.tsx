import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const RoiSection: React.FC = () => {
    // Calculator Inputs
    const [rev, setRev] = useState(5000);
    const [spend, setSpend] = useState(4000);
    const [hc, setHc] = useState(7000);
    const [projects, setProjects] = useState(30);
    const [days, setDays] = useState(114);
    const [invoices, setInvoices] = useState(12000);

    // Logic based on conservative estimates
    const procYield = spend * 0.10; // 10% of procurement spend
    
    // WC Unlocking: reduction to industry standard 90 days if > 90
    const daysReduction = Math.max(0, days - 90);
    // Assuming daily revenue = rev / 365, conservative WC unlock pool
    const wcUnlock = (rev / 365) * daysReduction * 0.3; // 30% conservative realization
    
    // Finance: ~0.5% of Revenue as baseline AP/AR efficiency
    const finYield = rev * 0.005 + (invoices * 12 * 1 / 1000000); // $1 per invoice saved 
    
    // Compliance: Flat conservative scale
    const compYield = 4.0; // ~$4M
    
    // Operations: Project-based
    const opsYield = projects * 0.3; // ~$0.3M per project
    
    // Sales: Revenue bump
    const salesYield = rev * 0.02; // 2% rev increase
    
    // HR & IT: Employee-based savings
    const hritYield = hc * 0.0006; // $600 per employee/year in Millions

    const totalYield = procYield + finYield + compYield + opsYield + salesYield + hritYield;
    
    // Financial Metrics
    const investment = 0.45; // $450k Yr 1
    const recurring = 0.12; // $120k
    
    let paybackWeeks = 0;
    if (totalYield > 0) {
        const monthlyYield = (totalYield * 0.7) / 12; // 70% conservative realization
        paybackWeeks = (investment / monthlyYield) * 4;
    }

    const discountedYearly = totalYield * 0.7 * 0.89; // 12% discount factor simplified
    const npv = (discountedYearly * 3) - investment - (recurring * 2);
    
    const fiveYearVal = (totalYield * 0.7 * 5);
    const fiveYearCost = investment + (recurring * 4);
    const roi = ((fiveYearVal - fiveYearCost) / fiveYearCost) * 100;

    const results = {
        proc: procYield * 0.7,
        wc: wcUnlock,
        fin: finYield * 0.7,
        comp: compYield * 0.7,
        ops: opsYield * 0.7,
        sales: salesYield * 0.7,
        hrit: hritYield * 0.7,
        total: totalYield * 0.7,
        payback: paybackWeeks,
        threeYearNPV: npv,
        fiveYearROI: roi
    };

    const formatM = (num: number) => {
        return '$' + num.toLocaleString('en-US', { maximumFractionDigits: 1 }) + 'M';
    };

    return (
        <section id="roi" style={{ padding: 'var(--spacing-16) 0', borderTop: '1px solid var(--color-border)', background: 'rgba(2, 8, 19, 0.4)' }}>
            <div className="container" style={{ maxWidth: '100%', padding: '0 var(--spacing-4)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
                    <div style={{ color: '#00D4FF', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 'var(--spacing-4)' }}>
                        Proof of Value
                    </div>

                    <div style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 900,
                        letterSpacing: '-1px',
                        lineHeight: 1,
                        background: 'linear-gradient(245deg, #00D4FF 0%, #10B981 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: 'var(--spacing-3)',
                        fontFamily: 'var(--font-mono)'
                    }}>
                        42,567% ROI
                    </div>

                    <div style={{ fontSize: 'var(--font-size-lg)', color: '#D1D5DB', marginBottom: 'var(--spacing-10)' }}>
                        Over 5 years with &lt;2 week payback period
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
                        {/* Card 1 */}
                        <div className="glass-panel" style={{ padding: 'var(--spacing-6)' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00D4FF', fontFamily: 'var(--font-mono)', marginBottom: 'var(--spacing-2)' }}>
                                $450k
                            </div>
                            <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500 }}>Year 1 Investment</div>
                        </div>

                        {/* Card 2 */}
                        <div className="glass-panel" style={{ padding: 'var(--spacing-6)' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00D4FF', fontFamily: 'var(--font-mono)', marginBottom: 'var(--spacing-2)' }}>
                                $120k
                            </div>
                            <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500 }}>Annual Recurring Cost</div>
                        </div>

                        {/* Card 3 */}
                        <div className="glass-panel" style={{ padding: 'var(--spacing-6)' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10B981', fontFamily: 'var(--font-mono)', marginBottom: 'var(--spacing-2)' }}>
                                $150M
                            </div>
                            <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500 }}>Annual Value Generated</div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel" style={{ overflowX: 'auto', marginBottom: 'var(--spacing-16)', maxWidth: '1100px', margin: '0 auto var(--spacing-16)' }}>
                    <h3 style={{ padding: 'var(--spacing-6)', fontSize: '1.25rem', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        $150M Value Breakdown Across 7 Functions
                    </h3>
                    <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                                <th style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)', fontWeight: 600 }}>Enterprise Function</th>
                                <th style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)', fontWeight: 600 }}>AI Agents</th>
                                <th style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)', fontWeight: 600 }}>Annual Value</th>
                                <th style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)', fontWeight: 600 }}>WC Impact</th>
                                <th style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)', fontWeight: 600 }}>Key Metrics</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: '1. Procurement & Supply Chain', agents: 3, val: '$58M', cap: '$8M', impact: '30% faster PRs, $480M spend optimized' },
                                { name: '2. Finance & Accounting', agents: 4, val: '$26M', cap: '$12M', impact: 'Debtor days 114→90, 90-day cash forecast' },
                                { name: '3. Compliance & Risk', agents: 3, val: '$4M', cap: '—', impact: '20+ Tax IDs, $1M Tax Credits, 100% compliance rate' },
                                { name: '4. HR & Administration', agents: 2, val: '$5.5M', cap: '—', impact: '7,000 employees, 99.5% payroll accuracy' },
                                { name: '5. Operations & Projects', agents: 3, val: '$13.4M', cap: '$2.4M', impact: '$3.7M bonuses, $156M fleet analysis' },
                                { name: '6. Sales & Bid Management', agents: 3, val: '$25M', cap: '—', impact: '1,200 tenders tracked, 38% win rate' },
                                { name: '7. IT & Technology', agents: 2, val: '$4.2M', cap: '—', impact: '180K SAP transactions/mo, 85% auto-res' },
                            ].map((row, idx) => (
                                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)', background: idx % 2 === 0 ? 'transparent' : 'rgba(0, 212, 255, 0.02)' }}>
                                    <td style={{ padding: 'var(--spacing-4)', fontWeight: 600 }}>{row.name}</td>
                                    <td style={{ padding: 'var(--spacing-4)' }}>{row.agents}</td>
                                    <td style={{ padding: 'var(--spacing-4)', color: '#10B981', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{row.val}</td>
                                    <td style={{ padding: 'var(--spacing-4)' }}>{row.cap}</td>
                                    <td style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{row.impact}</td>
                                </tr>
                            ))}
                            <tr style={{ background: 'rgba(16, 185, 129, 0.1)', borderTop: '2px solid rgba(16, 185, 129, 0.5)' }}>
                                <td style={{ padding: 'var(--spacing-4)', fontWeight: 700 }}>TOTAL</td>
                                <td style={{ padding: 'var(--spacing-4)', fontWeight: 700 }}>23 Agents</td>
                                <td style={{ padding: 'var(--spacing-4)', color: '#10B981', fontWeight: 800, fontFamily: 'var(--font-mono)', fontSize: '1.2rem' }}>$150M</td>
                                <td style={{ padding: 'var(--spacing-4)', fontWeight: 700 }}>$22M</td>
                                <td style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)' }}>Across 7 functions</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Transparency Table */}
                <div style={{ maxWidth: '1100px', margin: '0 auto var(--spacing-16)' }}>
                    <div className="glass-panel" style={{ overflow: 'hidden' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <th style={{ padding: 'var(--spacing-4)' }}>Component</th>
                                    <th style={{ padding: 'var(--spacing-4)' }}>Full Value</th>
                                    <th style={{ padding: 'var(--spacing-4)', color: '#00D4FF' }}>Conservative (70%)</th>
                                    <th style={{ padding: 'var(--spacing-4)' }}>Probability</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                                    <td style={{ padding: 'var(--spacing-4)' }}>Annual Recurring Value</td>
                                    <td style={{ padding: 'var(--spacing-4)', fontFamily: 'var(--font-mono)' }}>$150M</td>
                                    <td style={{ padding: 'var(--spacing-4)', fontFamily: 'var(--font-mono)', color: '#00D4FF', fontWeight: 600 }}>$107.5M</td>
                                    <td style={{ padding: 'var(--spacing-4)', color: 'var(--color-success)' }}>Guaranteed</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                                    <td style={{ padding: 'var(--spacing-4)' }}>Working Capital Unlocking</td>
                                    <td style={{ padding: 'var(--spacing-4)', fontFamily: 'var(--font-mono)' }}>$22M</td>
                                    <td style={{ padding: 'var(--spacing-4)', fontFamily: 'var(--font-mono)', color: '#00D4FF', fontWeight: 600 }}>$28.8M</td>
                                    <td style={{ padding: 'var(--spacing-4)', color: 'var(--color-success)' }}>Guaranteed</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: 'var(--spacing-4)' }}>One-Time (Asset Monetization)</td>
                                    <td style={{ padding: 'var(--spacing-4)', fontFamily: 'var(--font-mono)' }}>$60M</td>
                                    <td style={{ padding: 'var(--spacing-4)', fontFamily: 'var(--font-mono)', color: '#00D4FF', fontWeight: 600 }}>$42M</td>
                                    <td style={{ padding: 'var(--spacing-4)', color: 'var(--color-warning)' }}>Market-dependent</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p style={{ marginTop: 'var(--spacing-4)', fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                        *We use a conservative 70% realization factor in our projections to account for implementation phasing, process maturity delays, and edge cases. Even at the 70% conservative case, ROI exceeds 42,000% over 5 years.
                    </p>
                </div>

                {/* Interactive ROI Section */}
                <div style={{
                    background: '#040b16',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    padding: 'var(--spacing-8)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5)',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    <div className="grid md:grid-cols-2 gap-12" style={{ alignItems: 'stretch' }}>

                        {/* Left Side: Inputs */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: 'var(--spacing-2)' }}>
                                Interactive Platform Estimator
                            </h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-4)' }}>
                                Enter your enterprise numbers to simulate your specific ROI.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex-col gap-1">
                                    <label style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 500 }}>Annual Rev ($M)</label>
                                    <div style={{ position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#fff' }}>$</span>
                                        <input
                                            type="number"
                                            style={{ width: '100%', padding: '10px 10px 10px 24px', background: '#0a1120', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '6px', color: '#fff', fontFamily: 'var(--font-mono)', outline: 'none' }}
                                            value={rev} onChange={(e) => setRev(parseFloat(e.target.value) || 0)}
                                        />
                                    </div>
                                </div>
                                <div className="flex-col gap-1">
                                    <label style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 500 }}>Procure Spend ($M)</label>
                                    <div style={{ position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#fff' }}>$</span>
                                        <input
                                            type="number"
                                            style={{ width: '100%', padding: '10px 10px 10px 24px', background: '#0a1120', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '6px', color: '#fff', fontFamily: 'var(--font-mono)', outline: 'none' }}
                                            value={spend} onChange={(e) => setSpend(parseFloat(e.target.value) || 0)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex-col gap-1">
                                    <label style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 500 }}>Total Employees</label>
                                    <input
                                        type="number"
                                        style={{ width: '100%', padding: '10px 12px', background: '#0a1120', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '6px', color: '#fff', fontFamily: 'var(--font-mono)', outline: 'none' }}
                                        value={hc} onChange={(e) => setHc(parseFloat(e.target.value) || 0)}
                                    />
                                </div>
                                <div className="flex-col gap-1">
                                    <label style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 500 }}>Active Projects</label>
                                    <input
                                        type="number"
                                        style={{ width: '100%', padding: '10px 12px', background: '#0a1120', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '6px', color: '#fff', fontFamily: 'var(--font-mono)', outline: 'none' }}
                                        value={projects} onChange={(e) => setProjects(parseFloat(e.target.value) || 0)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex-col gap-1">
                                    <label style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 500 }}>Debtor Days</label>
                                    <input
                                        type="number"
                                        style={{ width: '100%', padding: '10px 12px', background: '#0a1120', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '6px', color: '#fff', fontFamily: 'var(--font-mono)', outline: 'none' }}
                                        value={days} onChange={(e) => setDays(parseFloat(e.target.value) || 0)}
                                    />
                                </div>
                                <div className="flex-col gap-1">
                                    <label style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 500 }}>Invoice Vol/Month</label>
                                    <input
                                        type="number"
                                        style={{ width: '100%', padding: '10px 12px', background: '#0a1120', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '6px', color: '#fff', fontFamily: 'var(--font-mono)', outline: 'none' }}
                                        value={invoices} onChange={(e) => setInvoices(parseFloat(e.target.value) || 0)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Results */}
                        <div className="flex-col justify-between" style={{
                            background: '#0f1f31',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '12px',
                            padding: 'var(--spacing-8)'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-6)' }}>
                                <h4 style={{ color: '#9CA3AF', fontWeight: 400, fontSize: '0.95rem', marginBottom: 'var(--spacing-2)' }}>
                                    Estimated Annual Value (Conservative)
                                </h4>
                                <motion.div
                                    key={results.total}
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    style={{ fontSize: '3.5rem', fontWeight: 800, color: '#10B981', letterSpacing: '-1px', lineHeight: 1.1, fontFamily: 'var(--font-mono)' }}
                                >
                                    {formatM(results.total)}
                                </motion.div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 font-mono" style={{ marginBottom: 'var(--spacing-6)' }}>
                                <div className="flex justify-between items-center p-2 rounded bg-black/20">
                                    <span>Procurement</span> <span className="text-white font-bold">{formatM(results.proc)}</span>
                                </div>
                                <div className="flex justify-between items-center p-2 rounded bg-black/20">
                                    <span>WC Unlocked</span> <span className="text-white font-bold">{formatM(results.wc)}</span>
                                </div>
                                <div className="flex justify-between items-center p-2 rounded bg-black/20">
                                    <span>Finance</span> <span className="text-white font-bold">{formatM(results.fin)}</span>
                                </div>
                                <div className="flex justify-between items-center p-2 rounded bg-black/20">
                                    <span>Compliance</span> <span className="text-white font-bold">{formatM(results.comp)}</span>
                                </div>
                                <div className="flex justify-between items-center p-2 rounded bg-black/20">
                                    <span>Ops/Projects</span> <span className="text-white font-bold">{formatM(results.ops)}</span>
                                </div>
                                <div className="flex justify-between items-center p-2 rounded bg-black/20">
                                    <span>Sales</span> <span className="text-white font-bold">{formatM(results.sales)}</span>
                                </div>
                                <div className="flex justify-between items-center p-2 rounded bg-black/20 col-span-2">
                                    <span>HR & IT</span> <span className="text-white font-bold">{formatM(results.hrit)}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3" style={{ marginBottom: 'var(--spacing-6)' }}>
                                <div className="text-center p-3 rounded" style={{ background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.2)' }}>
                                    <div className="text-xs text-gray-400 mb-1">Payback Period</div>
                                    <div className="font-bold font-mono text-cyan-400">{results.payback.toFixed(1)} wks</div>
                                </div>
                                <div className="text-center p-3 rounded" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                    <div className="text-xs text-gray-400 mb-1">3-Year NPV</div>
                                    <div className="font-bold font-mono text-emerald-400">{formatM(results.threeYearNPV)}</div>
                                </div>
                                <div className="text-center p-3 rounded" style={{ background: 'rgba(249, 92, 246, 0.1)', border: '1px solid rgba(249, 92, 246, 0.2)' }}>
                                    <div className="text-xs text-gray-400 mb-1">5-Year ROI</div>
                                    <div className="font-bold font-mono text-purple-400">{results.fiveYearROI.toLocaleString('en-IN', { maximumFractionDigits: 0 })}%</div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a href="#contact" className="btn btn-primary" style={{ flex: 1, textAlign: 'center', padding: '12px' }}>
                                    Get Detailed ROI Report
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
