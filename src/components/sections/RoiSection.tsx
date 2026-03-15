import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const RoiSection: React.FC = () => {
    const [rev, setRev] = useState(250000000);
    const [spend, setSpend] = useState(120000000);
    const [hc, setHc] = useState(3000);
    const [days, setDays] = useState(85);

    const [results, setResults] = useState({
        proc: 0,
        fin: 0,
        ops: 0,
        total: 0
    });

    useEffect(() => {
        const procYield = spend * 0.012; // 1.2% realistic savings on spend
        const finYieldBase = (rev * 0.01); // 1% optimization pool
        const daysFactor = ((days - 45) / days > 0 ? (days - 45) / days : 0.05);
        const finYield = finYieldBase * daysFactor;
        const opsYield = rev * 0.005; // 0.5% operational edge
        const hrYield = hc * 250; // $250 saved per employee annually (Tier 1 automated)

        const totalYield = procYield + finYield + opsYield + hrYield;

        setResults({
            proc: procYield,
            fin: finYield + hrYield,
            ops: opsYield,
            total: totalYield
        });
    }, [rev, spend, hc, days]);

    const formatDollar = (num: number) => {
        return '$' + (num / 1000000).toFixed(1) + 'M';
    };

    return (
        <section id="roi" style={{ padding: 'var(--spacing-16) 0', borderTop: '1px solid var(--color-border)', background: 'rgba(2, 8, 19, 0.4)' }}>
            <div className="container" style={{ maxWidth: '100%', padding: '0 var(--spacing-4)' }}>
                <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-12)' }}>
                    <div style={{ color: '#00D4FF', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 'var(--spacing-4)' }}>
                        Proven Return on Investment
                    </div>

                    <div style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 900,
                        letterSpacing: '-1px',
                        lineHeight: 1,
                        background: 'linear-gradient(135deg, #FF6B00 0%, #FFB000 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        marginBottom: 'var(--spacing-3)',
                        fontFamily: 'monospace'
                    }}>
                        412% ROI
                    </div>

                    <div style={{ fontSize: 'var(--font-size-lg)', color: '#D1D5DB', marginBottom: 'var(--spacing-10)' }}>
                        Over 3 years with &lt;5 month payback period
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
                        {/* Card 1 */}
                        <div style={{
                            background: '#0a1120',
                            border: '1px solid rgba(0, 212, 255, 0.1)',
                            borderRadius: '16px',
                            padding: 'var(--spacing-6)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                        }}>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                color: '#00D4FF',
                                fontFamily: 'monospace',
                                marginBottom: 'var(--spacing-2)'
                            }}>
                                $850K
                            </div>
                            <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500 }}>
                                Year 1 Investment
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div style={{
                            background: '#0a1120',
                            border: '1px solid rgba(0, 212, 255, 0.1)',
                            borderRadius: '16px',
                            padding: 'var(--spacing-6)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                        }}>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                color: '#00D4FF',
                                fontFamily: 'monospace',
                                marginBottom: 'var(--spacing-2)'
                            }}>
                                $240K
                            </div>
                            <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500 }}>
                                Annual Recurring Cost
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div style={{
                            background: '#0a1120',
                            border: '1px solid rgba(0, 212, 255, 0.1)',
                            borderRadius: '16px',
                            padding: 'var(--spacing-6)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                        }}>
                            <div style={{
                                fontSize: '2rem',
                                fontWeight: 800,
                                color: '#00D4FF',
                                fontFamily: 'monospace',
                                marginBottom: 'var(--spacing-2)'
                            }}>
                                $2.4M+
                            </div>
                            <div style={{ color: '#9CA3AF', fontSize: 'var(--font-size-sm)', fontWeight: 500 }}>
                                Annual Value Generated
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel" style={{ overflowX: 'auto', marginBottom: 'var(--spacing-16)' }}>
                    <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                                <th style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)', fontWeight: 600 }}>Enterprise Function</th>
                                <th style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)', fontWeight: 600 }}>AI Agents</th>
                                <th style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)', fontWeight: 600 }}>Annual Value Generated</th>
                                <th style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)', fontWeight: 600 }}>Working Capital Released</th>
                                <th style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)', fontWeight: 600 }}>Core Efficiency Impacts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: '1. Procurement & Supply Chain', agents: 3, val: '$570K', cap: '$650K', impact: '30% faster POs, optimize rogue spend' },
                                { name: '2. Finance & Accounting', agents: 4, val: '$420K', cap: '$450K', impact: 'Debtor days drop 65 to 45' },
                                { name: '3. Compliance & Risk', agents: 3, val: '$180K', cap: '-', impact: '100% compliance mapping' },
                                { name: '4. HR & Administration', agents: 2, val: '$250K', cap: '-', impact: 'Tier 1 queries auto-addressed' },
                                { name: '5. Operations & Projects', agents: 3, val: '$380K', cap: '$120K', impact: '95% defect rate capture' },
                                { name: '6. Sales & Bid Management', agents: 3, val: '$450K', cap: '-', impact: 'Win rate boost from 28% to 32%' },
                                { name: '7. IT & Technology', agents: 2, val: '$150K', cap: '-', impact: 'Automated 60% of routine tickets' },
                            ].map((row, idx) => (
                                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.3s' }}>
                                    <td style={{ padding: 'var(--spacing-4)', fontWeight: 600 }}>{row.name}</td>
                                    <td style={{ padding: 'var(--spacing-4)' }}>{row.agents}</td>
                                    <td style={{ padding: 'var(--spacing-4)', color: 'var(--color-success)', fontWeight: 700, fontFamily: 'monospace', fontSize: '1.1rem' }}>{row.val}</td>
                                    <td style={{ padding: 'var(--spacing-4)' }}>{row.cap}</td>
                                    <td style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)' }}>{row.impact}</td>
                                </tr>
                            ))}
                            <tr style={{ background: 'rgba(4, 30, 71, 0.4)', borderTop: '2px solid var(--color-primary)' }}>
                                <td style={{ padding: 'var(--spacing-4)', fontWeight: 700 }}>TOTAL PLATFORM IMPACT</td>
                                <td style={{ padding: 'var(--spacing-4)', fontWeight: 700 }}>23</td>
                                <td style={{ padding: 'var(--spacing-4)', color: 'var(--color-success)', fontWeight: 700, fontFamily: 'monospace', fontSize: '1.2rem' }}>$2.4 Million</td>
                                <td style={{ padding: 'var(--spacing-4)', fontWeight: 700 }}>$1.22 Million</td>
                                <td style={{ padding: 'var(--spacing-4)', color: 'var(--color-text-muted)' }}>Across All Divisions</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Completely redesigned Interactive ROI Section */}
                <div style={{
                    background: '#040b16', /* Deep dark background matching screenshot */
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '16px',
                    padding: 'var(--spacing-8)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.5)'
                }}>
                    <div className="grid md:grid-cols-2 gap-12" style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', alignItems: 'stretch' }}>

                        {/* Left Side: Inputs */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: 'var(--spacing-4)' }}>
                                Interactive Platform ROI Estimator
                            </h3>

                            <div className="flex-col gap-1">
                                <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Annual Revenue Volume (USD)</label>
                                <div style={{ position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#fff', fontSize: '0.95rem' }}>$</span>
                                    <input
                                        type="number"
                                        style={{
                                            width: '100%', padding: '10px 10px 10px 24px',
                                            background: '#0a1120', border: '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '6px', color: '#fff', fontFamily: 'monospace', fontSize: '0.95rem',
                                            outline: 'none', transition: 'border-color 0.2s'
                                        }}
                                        value={rev}
                                        onChange={(e) => setRev(parseFloat(e.target.value) || 0)}
                                    />
                                </div>
                            </div>

                            <div className="flex-col gap-1 mt-2">
                                <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Annual Procurement Spend (USD)</label>
                                <div style={{ position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#fff', fontSize: '0.95rem' }}>$</span>
                                    <input
                                        type="number"
                                        style={{
                                            width: '100%', padding: '10px 10px 10px 24px',
                                            background: '#0a1120', border: '1px solid rgba(255, 255, 255, 0.05)',
                                            borderRadius: '6px', color: '#fff', fontFamily: 'monospace', fontSize: '0.95rem',
                                            outline: 'none', transition: 'border-color 0.2s'
                                        }}
                                        value={spend}
                                        onChange={(e) => setSpend(parseFloat(e.target.value) || 0)}
                                    />
                                </div>
                            </div>

                            <div className="flex-col gap-1 mt-2">
                                <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Total Headcount</label>
                                <input
                                    type="number"
                                    style={{
                                        width: '100%', padding: '10px 12px',
                                        background: '#0a1120', border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '6px', color: '#fff', fontFamily: 'monospace', fontSize: '0.95rem',
                                        outline: 'none'
                                    }}
                                    value={hc}
                                    onChange={(e) => setHc(parseFloat(e.target.value) || 0)}
                                />
                            </div>

                            <div className="flex-col gap-1 mt-2">
                                <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Average Payables/Receivables Overhang (Days)</label>
                                <input
                                    type="number"
                                    style={{
                                        width: '100%', padding: '10px 12px',
                                        background: '#0a1120', border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '6px', color: '#fff', fontFamily: 'monospace', fontSize: '0.95rem',
                                        outline: 'none'
                                    }}
                                    value={days}
                                    onChange={(e) => setDays(parseFloat(e.target.value) || 0)}
                                />
                            </div>
                        </div>

                        {/* Right Side: Results */}
                        <div className="flex-col justify-between" style={{
                            background: '#0f1f31', /* Lighter dark blue box */
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '12px',
                            padding: 'var(--spacing-8)'
                        }}>
                            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-8)' }}>
                                <h4 style={{ color: '#9CA3AF', fontWeight: 400, fontSize: '0.95rem', marginBottom: 'var(--spacing-2)' }}>
                                    Estimated Conservative Annual Yield
                                </h4>
                                <motion.div
                                    key={results.total}
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    style={{ fontSize: '4.5rem', fontWeight: 700, color: '#10B981', letterSpacing: '-1px', lineHeight: 1.1 }}
                                >
                                    {formatDollar(results.total)}
                                </motion.div>
                                <span style={{ fontSize: '0.85rem', color: '#10B981', fontFamily: 'monospace' }}>
                                    + Working Capital Unlocks Ignored
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-4" style={{ marginBottom: 'var(--spacing-6)' }}>
                                <div style={{ background: '#0a1523', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.02)' }}>
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '8px' }}>Procurement Target</span>
                                    <span style={{ fontFamily: 'monospace', fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>{formatDollar(results.proc)}</span>
                                </div>
                                <div style={{ background: '#0a1523', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.02)' }}>
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '8px' }}>Back-Office Scale</span>
                                    <span style={{ fontFamily: 'monospace', fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>{formatDollar(results.fin)}</span>
                                </div>
                                <div style={{ background: '#0a1523', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.02)' }}>
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '8px' }}>Operations Lift</span>
                                    <span style={{ fontFamily: 'monospace', fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>{formatDollar(results.ops)}</span>
                                </div>
                                <div style={{ background: '#0a1523', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid rgba(255, 255, 255, 0.02)' }}>
                                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '8px' }}>Payback Period</span>
                                    <span style={{ fontFamily: 'monospace', fontSize: '1.25rem', fontWeight: 700, color: '#00D4FF' }}>4.8 Months</span>
                                </div>
                            </div>

                            <div className="flex-col gap-3" style={{ marginBottom: 'var(--spacing-6)', padding: '16px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.1)', borderRadius: '8px' }}>
                                <h4 style={{ color: '#10B981', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                                    Operational Enhancements
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span style={{ display: 'block', color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>+45% Productivity</span>
                                        <span style={{ display: 'block', color: '#9CA3AF', fontSize: '0.75rem' }}>with {Math.round(hc * 0.12).toLocaleString()} FTEs reallocated</span>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>100% Compliance</span>
                                        <span style={{ display: 'block', color: '#9CA3AF', fontSize: '0.75rem' }}>& total audit transparency</span>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>10x Speed</span>
                                        <span style={{ display: 'block', color: '#9CA3AF', fontSize: '0.75rem' }}>reduction in cycle times</span>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>Zero Variance</span>
                                        <span style={{ display: 'block', color: '#9CA3AF', fontSize: '0.75rem' }}>standardized execution</span>
                                    </div>
                                </div>
                            </div>

                            <a href="#contact" style={{
                                display: 'block', width: '100%', textAlign: 'center',
                                background: 'linear-gradient(135deg, #00d4ff 0%, #635bff 100%)',
                                color: '#fff', padding: '14px', borderRadius: '8px',
                                fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                            >
                                Lock In Detailed Audit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
