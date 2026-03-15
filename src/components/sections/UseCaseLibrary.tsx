import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, AppWindow, Cpu, Network, ChevronDown, ChevronUp } from 'lucide-react';
import useCasesData from '../../data/useCases.json';
import { Badge } from '../ui/Badge';

interface Layer {
    name: string;
    description: string;
}

interface FlowStep {
    step: string;
    agent: string;
    description: string;
}

interface UseCase {
    id: string;
    function: string;
    domain: string;
    title: string;
    description: string;
    layers: Layer[];
    flow: FlowStep[];
    sector?: string;
    industryGroup?: string;
    industry?: string;
}

const ITEMS_PER_PAGE = 12;

interface UseCaseLibraryProps {
    initialDepartment?: string;
}

export const UseCaseLibrary: React.FC<UseCaseLibraryProps> = ({ initialDepartment = 'All' }) => {
    const [viewMode, setViewMode] = useState<'department' | 'industry'>('department');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFunction, setSelectedFunction] = useState<string>(initialDepartment);
    const [selectedDomain, setSelectedDomain] = useState<string>('All');

    const [selectedSector, setSelectedSector] = useState<string>('All');
    const [selectedIndustryGroup, setSelectedIndustryGroup] = useState<string>('All');

    const [currentPage, setCurrentPage] = useState(1);
    const [expandedCase, setExpandedCase] = useState<string | null>(null);

    const useCases = useCasesData as UseCase[];

    // Clean up function names (remove " Function" suffix if present)
    const cleanFunctionName = (name: string) => name.replace(/ Function$/i, '').trim();

    const departments = useMemo(() => {
        const funcs = new Set(useCases.map(uc => cleanFunctionName(uc.function)));
        return ['All', ...Array.from(funcs)].sort();
    }, [useCases]);

    const subDepartments = useMemo(() => {
        if (selectedFunction === 'All') return ['All'];
        const domains = new Set(
            useCases
                .filter(uc => cleanFunctionName(uc.function) === selectedFunction)
                .map(uc => uc.domain)
        );
        return ['All', ...Array.from(domains)].sort();
    }, [useCases, selectedFunction]);

    const sectors = useMemo(() => {
        const secs = new Set(useCases.map(uc => uc.sector).filter(Boolean) as string[]);
        return ['All', ...Array.from(secs)].sort();
    }, [useCases]);

    const industryGroups = useMemo(() => {
        if (selectedSector === 'All') return ['All'];
        const groups = new Set(
            useCases
                .filter(uc => uc.sector === selectedSector)
                .map(uc => uc.industryGroup)
                .filter(Boolean) as string[]
        );
        return ['All', ...Array.from(groups)].sort();
    }, [useCases, selectedSector]);

    const filteredCases = useMemo(() => {
        return useCases.filter(uc => {
            const matchesSearch =
                uc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                uc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                uc.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (uc.industry && uc.industry.toLowerCase().includes(searchTerm.toLowerCase()));

            if (viewMode === 'department') {
                const matchesFunction = selectedFunction === 'All' || cleanFunctionName(uc.function) === selectedFunction;
                const matchesDomain = selectedDomain === 'All' || uc.domain === selectedDomain;
                return matchesFunction && matchesDomain && matchesSearch;
            } else {
                const matchesSector = selectedSector === 'All' || uc.sector === selectedSector;
                const matchesGroup = selectedIndustryGroup === 'All' || uc.industryGroup === selectedIndustryGroup;
                return matchesSector && matchesGroup && matchesSearch;
            }
        });
    }, [useCases, viewMode, selectedFunction, selectedDomain, selectedSector, selectedIndustryGroup, searchTerm]);

    const totalPages = Math.ceil(filteredCases.length / ITEMS_PER_PAGE);
    const paginatedCases = filteredCases.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const toggleExpand = (id: string) => {
        if (expandedCase === id) {
            setExpandedCase(null);
        } else {
            setExpandedCase(id);
        }
    };

    return (
        <section id="library" className="min-h-screen pt-32 pb-24" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container mx-auto px-4">

                <div className="flex-col items-center justify-center text-center mb-12">
                    <Badge variant="purple" className="mb-4">Enterprise Agent Directory</Badge>
                    <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 'var(--spacing-4)', fontFamily: 'var(--font-head)', fontWeight: 700, color: 'var(--color-text)' }}>
                        600+ AI <span className="text-gradient">Agent Use Cases</span>
                    </div>
                    <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        Browse the world's largest repository of production-ready autonomous enterprise AI agents. Filter by department or search for specific capabilities.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="glass-panel" style={{ position: 'sticky', top: '5.5rem', zIndex: 30, marginBottom: '2rem', padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ position: 'relative', width: '100%', maxWidth: '350px' }}>
                            <Search style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)', width: '16px', height: '16px' }} />
                            <input
                                type="text"
                                placeholder="Search agents, workflows..."
                                value={searchTerm}
                                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                                className="search-input"
                                style={{
                                    width: '100%',
                                    padding: '8px 12px 8px 32px',
                                    borderRadius: '6px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    background: 'rgba(0,0,0,0.2)',
                                    color: 'white',
                                    outline: 'none',
                                    fontSize: '0.9rem'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '2px', borderRadius: '6px' }}>
                            <button
                                onClick={() => { setViewMode('department'); setCurrentPage(1); }}
                                style={{
                                    padding: '6px 12px',
                                    fontSize: '0.8rem',
                                    borderRadius: '4px',
                                    transition: 'all 0.2s ease',
                                    backgroundColor: viewMode === 'department' ? '#00D4FF' : 'transparent',
                                    color: viewMode === 'department' ? '#040b16' : '#9ca3af',
                                    fontWeight: viewMode === 'department' ? 600 : 400,
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                By Department
                            </button>
                            <button
                                onClick={() => { setViewMode('industry'); setCurrentPage(1); }}
                                style={{
                                    padding: '6px 12px',
                                    fontSize: '0.8rem',
                                    borderRadius: '4px',
                                    transition: 'all 0.2s ease',
                                    backgroundColor: viewMode === 'industry' ? '#10B981' : 'transparent',
                                    color: viewMode === 'industry' ? '#040b16' : '#9ca3af',
                                    fontWeight: viewMode === 'industry' ? 600 : 400,
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                By Industry
                            </button>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginRight: '8px' }}>
                            <Filter style={{ width: '14px', height: '14px', color: viewMode === 'department' ? 'var(--color-primary)' : '#10B981' }} />
                            <span style={{ color: '#9CA3AF', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>
                                {viewMode === 'department' ? 'DEPT:' : 'SECTOR:'}
                            </span>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', flex: 1 }}>
                            {viewMode === 'department' ? (
                                departments.map(dept => (
                                    <button
                                        key={dept}
                                        onClick={() => { setSelectedFunction(dept); setSelectedDomain('All'); setCurrentPage(1); }}
                                        className={`filter-btn ${selectedFunction === dept ? 'active' : ''}`}
                                        style={{ padding: '4px 10px', fontSize: '0.75rem', borderRadius: '4px' }}
                                    >
                                        {dept === 'All' ? 'All' : dept}
                                    </button>
                                ))
                            ) : (
                                sectors.map(sector => (
                                    <button
                                        key={sector}
                                        onClick={() => { setSelectedSector(sector); setSelectedIndustryGroup('All'); setCurrentPage(1); }}
                                        className={`filter-btn ${selectedSector === sector ? 'active' : ''}`}
                                        style={{ padding: '4px 10px', fontSize: '0.75rem', borderRadius: '4px', borderColor: selectedSector === sector ? '#10B981' : undefined, color: selectedSector === sector ? '#10B981' : undefined, background: selectedSector === sector ? 'rgba(16, 185, 129, 0.1)' : undefined }}
                                    >
                                        {sector === 'All' ? 'All' : sector}
                                    </button>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Sub-Filter (Domain or Industry Group) */}
                    <AnimatePresence>
                        {(viewMode === 'department' && selectedFunction !== 'All' && subDepartments.length > 1) ||
                            (viewMode === 'industry' && selectedSector !== 'All' && industryGroups.length > 1) ? (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', width: '100%', borderTop: '1px dashed rgba(255,255,255,0.05)', paddingTop: '0.5rem' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginRight: '8px' }}>
                                    <span style={{ color: 'var(--color-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 500 }}>
                                        {viewMode === 'department' ? 'SUB-DEPT:' : 'GROUP:'}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', flex: 1 }}>
                                    {viewMode === 'department' ? (
                                        subDepartments.map(domain => (
                                            <button
                                                key={domain}
                                                onClick={() => { setSelectedDomain(domain); setCurrentPage(1); }}
                                                className={`sub-filter-btn ${selectedDomain === domain ? 'active' : ''}`}
                                                style={{ padding: '3px 8px', fontSize: '0.75rem', borderRadius: '4px' }}
                                            >
                                                {domain === 'All' ? 'All' : domain}
                                            </button>
                                        ))
                                    ) : (
                                        industryGroups.map(group => (
                                            <button
                                                key={group}
                                                onClick={() => { setSelectedIndustryGroup(group); setCurrentPage(1); }}
                                                className={`sub-filter-btn ${selectedIndustryGroup === group ? 'active' : ''}`}
                                                style={{ padding: '3px 8px', fontSize: '0.75rem', borderRadius: '4px' }}
                                            >
                                                {group === 'All' ? 'All' : group}
                                            </button>
                                        ))
                                    )}
                                </div>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </div>

                {/* Results Stats */}
                <div className="mb-6 flex justify-between items-center text-sm text-gray-400 font-mono">
                    <span>Showing {filteredCases.length} AI Agents</span>
                    {filteredCases.length > 0 && <span>Page {currentPage} of {totalPages}</span>}
                </div>

                {/* Grid */}
                {filteredCases.length === 0 ? (
                    <div className="glass-panel p-20 text-center flex-col items-center">
                        <AppWindow className="w-16 h-16 text-gray-600 mb-4 mx-auto" />
                        <h3 className="text-xl text-white mb-2">No Agents Found</h3>
                        <p className="text-gray-400">Try adjusting your search terms or filters.</p>
                    </div>
                ) : (
                    <div className="use-case-grid">
                        <AnimatePresence mode="popLayout">
                            {paginatedCases.map(uc => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    key={uc.id}
                                    className={`glass-panel use-case-card ${expandedCase === uc.id ? 'expanded' : ''}`}
                                >
                                    <div style={{ padding: 'var(--spacing-6)', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-4)' }}>
                                            <Badge variant={viewMode === 'industry' ? 'green' : 'blue'}>{uc.id}</Badge>
                                            <span style={{ fontSize: '11px', color: viewMode === 'industry' ? '#10B981' : 'var(--color-secondary)', fontFamily: 'monospace', background: viewMode === 'industry' ? 'rgba(16,185,129,0.1)' : 'rgba(0,212,255,0.1)', padding: '2px 8px', borderRadius: '4px', textAlign: 'right', maxWidth: '70%' }}>
                                                {viewMode === 'industry' ? (
                                                    <>{uc.industryGroup} • {uc.industry}</>
                                                ) : (
                                                    <>{cleanFunctionName(uc.function)} • {uc.domain}</>
                                                )}
                                            </span>
                                        </div>
                                        {/* Using div with inline style to override any CSS heading rules that force bold */}
                                        <div style={{ fontSize: 'var(--font-size-lg)', color: '#fff', marginBottom: 'var(--spacing-3)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.3 }}>{uc.title}</div>
                                        <div className="line-clamp-3" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--spacing-4)' }}>{uc.description}</div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)', marginTop: 'auto', paddingTop: 'var(--spacing-4)', borderTop: '1px solid var(--glass-border)' }}>
                                            <div className="tooltip-trigger" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', fontSize: '12px', color: 'var(--color-text-muted)', cursor: 'help' }}>
                                                <Network style={{ width: '16px', height: '16px', color: '#10B981' }} />
                                                <span style={{ borderBottom: '1px dashed #10B981' }}>{uc.layers?.length || 5} Reasoning Layers</span>
                                                {/* Tooltip for Reasoning Layers */}
                                                <div className="custom-tooltip" style={{
                                                    position: 'absolute', bottom: '100%', left: 0, marginBottom: '8px',
                                                    width: 'max-content', minWidth: '220px', maxWidth: '300px',
                                                    background: 'rgba(11, 25, 44, 0.95)', border: '1px solid var(--glass-border)',
                                                    borderRadius: 'var(--radius-md)', padding: 'var(--spacing-3)',
                                                    color: '#fff', fontSize: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                                                    backdropFilter: 'blur(12px)', zIndex: 50, display: 'none', flexDirection: 'column'
                                                }}>
                                                    <div style={{ fontWeight: 600, color: '#10B981', marginBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4px' }}>5 Core Reasoning Layers</div>
                                                    <ol style={{ paddingLeft: '16px', margin: 0, color: '#D1D5DB', display: 'flex', flexDirection: 'column', gap: '4px', listStyleType: 'decimal' }}>
                                                        <li>Perception & Ingestion</li>
                                                        <li>Contextual Understanding</li>
                                                        <li>Strategic Planning & Routing</li>
                                                        <li>Action Execution (RPA)</li>
                                                        <li>Continuous Feedback & Learning</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <div className="tooltip-trigger" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)', fontSize: '12px', color: 'var(--color-text-muted)', cursor: 'help' }}>
                                                <Cpu className="w-4 h-4 text-purple-400" />
                                                <span style={{ borderBottom: '1px dashed #A78BFA' }}>{uc.flow?.length || 7} Agent Sub-Routines</span>
                                                {/* Tooltip for Agent Sub-Routines */}
                                                <div className="custom-tooltip" style={{
                                                    position: 'absolute', bottom: '100%', left: 0, marginBottom: '8px',
                                                    width: 'max-content', minWidth: '220px', maxWidth: '300px',
                                                    background: 'rgba(11, 25, 44, 0.95)', border: '1px solid var(--glass-border)',
                                                    borderRadius: 'var(--radius-md)', padding: 'var(--spacing-3)',
                                                    color: '#fff', fontSize: '12px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)',
                                                    backdropFilter: 'blur(12px)', zIndex: 50, display: 'none', flexDirection: 'column'
                                                }}>
                                                    <div style={{ fontWeight: 600, color: '#A78BFA', marginBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '4px' }}>7 Agent Sub-Routines</div>
                                                    <ul style={{ paddingLeft: '16px', margin: 0, color: '#D1D5DB', display: 'flex', flexDirection: 'column', gap: '4px', listStyleType: 'disc' }}>
                                                        <li>Data Extraction & Validation</li>
                                                        <li>Anomaly Detection</li>
                                                        <li>Multi-System Syncing</li>
                                                        <li>Decision Gate Approval</li>
                                                        <li>Error Handling & Retry</li>
                                                        <li>Audit Trail Logging</li>
                                                        <li>Human-in-Loop Handoff</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ marginTop: 'auto', borderTop: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)' }}>
                                        <button
                                            onClick={() => toggleExpand(uc.id)}
                                            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--spacing-4)', background: 'transparent', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'var(--font-size-sm)' }}
                                        >
                                            View Architectural Flow
                                            {expandedCase === uc.id ? <ChevronUp style={{ width: '16px', height: '16px' }} /> : <ChevronDown style={{ width: '16px', height: '16px' }} />}
                                        </button>

                                        <AnimatePresence>
                                            {expandedCase === uc.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                    style={{ borderTop: '1px solid var(--glass-border)' }}
                                                >
                                                    <div style={{ padding: 'var(--spacing-6)', background: 'rgba(0,0,0,0.4)' }}>
                                                        {uc.flow && uc.flow.length > 0 ? (
                                                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                                                                <div style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--spacing-4)' }}>Agent Execution Flow</div>
                                                                <div style={{ position: 'relative', paddingLeft: '24px', borderLeft: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
                                                                    {uc.flow.map((step, idx) => (
                                                                        <div key={idx} style={{ position: 'relative' }}>
                                                                            <div style={{ position: 'absolute', left: '-33px', top: '4px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', color: '#fff', boxShadow: '0 0 0 4px var(--color-bg)' }}>
                                                                                {step.step}
                                                                            </div>
                                                                            <div style={{ color: '#fff', fontSize: 'var(--font-size-sm)', marginBottom: '4px', fontWeight: 400 }}>{step.agent}</div>
                                                                            <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{step.description}</div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            <p className="text-sm text-gray-500 italic">Integration details loading...</p>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'var(--spacing-2)', marginTop: 'var(--spacing-10)' }}>
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="page-nav-btn glass-panel"
                            style={{ borderRadius: 'var(--radius-md)' }}
                        >
                            Previous
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: '0 var(--spacing-4)' }}>
                            {[...Array(totalPages)].map((_, i) => {
                                // Simple logic to not show all buttons if 50 pages
                                if (totalPages > 7) {
                                    if (i !== 0 && i !== totalPages - 1 && Math.abs(currentPage - 1 - i) > 1) {
                                        if (i === 1 || i === totalPages - 2) return <span key={i} className="text-gray-500">...</span>;
                                        return null;
                                    }
                                }
                                return (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                                    >
                                        {i + 1}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="page-nav-btn glass-panel"
                            style={{ borderRadius: 'var(--radius-md)' }}
                        >
                            Next
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};
