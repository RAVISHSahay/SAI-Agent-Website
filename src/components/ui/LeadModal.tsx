import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Download } from 'lucide-react';

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'demo' | 'download' | null;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, type }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        role: '',
        interest: 'procurement',
        phone: '',
        budget: '',
        timeline: '',
        automationLayer: '',
        comments: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Construct the email content
        const subject = encodeURIComponent(`New Lead Submission: ${type === 'demo' ? 'Live Demo Request' : 'Whitepaper Download'}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Company: ${formData.company}\n` +
            `Role: ${formData.role || 'Not Provided'}\n` +
            `Interest: ${formData.interest}\n` +
            `Budget: ${formData.budget}\n` +
            `Timeline: ${formData.timeline}\n` +
            `Automation Layer: ${formData.automationLayer || 'None/Not Provided'}\n` +
            `\nCustom Requirements:\n${formData.comments || 'None'}\n`
        );

        // Trigger default mail client
        window.location.href = `mailto:info@sequelstring.com?subject=${subject}&body=${body}`;

        // Simulate success state for UX
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
            setIsSubmitted(false);
            setSelectedDoc(null);
            setFormData({ name: '', email: '', company: '', role: '', interest: 'procurement', phone: '', budget: '', timeline: '', automationLayer: '', comments: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const titles = {
        demo: 'Book a Live Demo',
        download: 'Knowledge Bank & Materials'
    };

    const subtitles = {
        demo: 'See how our 23 AI agents can transform your enterprise. Schedule a personalized walkthrough.',
        download: 'Access our technical guides, playbooks, and compliance reports.'
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--spacing-4)',
                    overflowY: 'auto'
                }}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(2, 8, 19, 0.4)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            zIndex: 1,
                        }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '520px',
                            zIndex: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            margin: 'auto',
                            maxHeight: '100%',
                            boxSizing: 'border-box'
                        }}
                    >
                        <div style={{
                            position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '100%',
                            background: 'rgba(11, 25, 44, 0.98)',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                            borderRadius: '16px',
                            boxShadow: '0 24px 50px rgba(0,0,0,0.8), 0 0 30px rgba(0, 212, 255, 0.1)',
                            flex: 1
                        }}>
                            {/* Decorative Top Bar */}
                            <div style={{
                                height: '3px',
                                width: '100%',
                                background: type === 'demo' ? 'linear-gradient(90deg, #00D4FF, #635BFF)' : 'linear-gradient(90deg, #10B981, #00D4FF)',
                            }} />

                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: 'var(--spacing-4)',
                                    right: 'var(--spacing-4)',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#9CA3AF',
                                    cursor: 'pointer',
                                    padding: 'var(--spacing-1)',
                                }}
                            >
                                <X size={18} />
                            </button>

                            <div style={{ padding: 'var(--spacing-6)', overflowY: 'auto', WebkitOverflowScrolling: 'touch', flex: 1, minHeight: 0 }}>
                                {isSubmitted ? (
                                    <div className="flex-col items-center justify-center text-center" style={{ padding: 'var(--spacing-8) 0' }}>
                                        <div style={{
                                            width: '64px', height: '64px', borderRadius: '50%',
                                            background: 'rgba(16, 185, 129, 0.1)', color: '#10B981',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            margin: '0 auto var(--spacing-4)'
                                        }}>
                                            <Send size={32} />
                                        </div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--spacing-2)', color: '#fff', fontWeight: 600 }}>Request Received</h3>
                                        <p style={{ color: '#9CA3AF', fontSize: '0.95rem' }}>
                                            Our enterprise specialist will contact you shortly at <strong>{formData.email}</strong>.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: 'var(--spacing-2)' }}>
                                            {selectedDoc ? `Download ${selectedDoc}` : type ? titles[type] : 'Get Started'}
                                        </h2>
                                        <p style={{ color: '#9CA3AF', fontSize: '0.85rem', marginBottom: 'var(--spacing-4)', lineHeight: 1.4 }}>
                                            {selectedDoc ? 'Please provide your details below to access the material.' : type ? subtitles[type] : 'Fill out the form below.'}
                                        </p>

                                        {type === 'download' && !selectedDoc ? (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
                                                {[
                                                    { title: 'Enterprise AI Architecture Guide', type: 'PDF • 4.2 MB' },
                                                    { title: 'ROI & Economics Playbook', type: 'PDF • 2.1 MB' },
                                                    { title: 'Security & Compliance Validation', type: 'Report • 1.8 MB' },
                                                    { title: 'Agent Deployment Strategy', type: 'Playbook • 3.5 MB' }
                                                ].map((doc, idx) => (
                                                    <div key={idx} style={{ 
                                                        display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                                                        background: 'rgba(255,255,255,0.03)', padding: 'var(--spacing-4)', 
                                                        borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)'
                                                    }}>
                                                        <div>
                                                            <div style={{ color: '#fff', fontWeight: 500, fontSize: '0.95rem', marginBottom: '4px' }}>{doc.title}</div>
                                                            <div style={{ color: '#9CA3AF', fontSize: '0.8rem' }}>{doc.type}</div>
                                                        </div>
                                                        <button 
                                                            style={{ 
                                                                background: 'transparent', border: '1px solid #10B981', color: '#10B981', 
                                                                padding: '6px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600, 
                                                                cursor: 'pointer', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '6px'
                                                            }}
                                                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(16, 185, 129, 0.1)'; }}
                                                            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                                                            onClick={() => setSelectedDoc(doc.title)}
                                                        >
                                                            <Download size={14} /> Download
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                            ) : (
                                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Full Name</label>
                                                    <input
                                                        type="text" name="name" required
                                                        style={{
                                                            width: '100%', padding: '8px 12px',
                                                            background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.15)',
                                                            borderRadius: '8px', color: '#fff', fontSize: '1rem',
                                                            outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box'
                                                        }}
                                                        onFocus={(e) => { e.target.style.borderColor = '#00D4FF'; e.target.style.boxShadow = '0 0 0 2px rgba(0, 212, 255, 0.2)'; }}
                                                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.target.style.boxShadow = 'none'; }}
                                                        placeholder="John Doe"
                                                        value={formData.name} onChange={handleChange}
                                                    />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Work Email</label>
                                                    <input
                                                        type="email" name="email" required
                                                        style={{
                                                            width: '100%', padding: '8px 12px',
                                                            background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.15)',
                                                            borderRadius: '8px', color: '#fff', fontSize: '1rem',
                                                            outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box'
                                                        }}
                                                        onFocus={(e) => { e.target.style.borderColor = '#00D4FF'; e.target.style.boxShadow = '0 0 0 2px rgba(0, 212, 255, 0.2)'; }}
                                                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.target.style.boxShadow = 'none'; }}
                                                        placeholder="john@company.com"
                                                        value={formData.email} onChange={handleChange}
                                                    />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Phone Number</label>
                                                    <input
                                                        type="tel" name="phone" required
                                                        style={{
                                                            width: '100%', padding: '8px 12px',
                                                            background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.15)',
                                                            borderRadius: '8px', color: '#fff', fontSize: '0.9rem',
                                                            outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box'
                                                        }}
                                                        onFocus={(e) => { e.target.style.borderColor = '#00D4FF'; e.target.style.boxShadow = '0 0 0 2px rgba(0, 212, 255, 0.2)'; }}
                                                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.target.style.boxShadow = 'none'; }}
                                                        placeholder="+1 (555) 000-0000"
                                                        value={formData.phone} onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Company Name</label>
                                                <input
                                                    type="text" name="company" required
                                                    style={{
                                                        width: '100%', padding: '8px 12px',
                                                        background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.15)',
                                                        borderRadius: '8px', color: '#fff', fontSize: '0.9rem',
                                                        outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box'
                                                    }}
                                                    onFocus={(e) => { e.target.style.borderColor = '#00D4FF'; e.target.style.boxShadow = '0 0 0 2px rgba(0, 212, 255, 0.2)'; }}
                                                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.target.style.boxShadow = 'none'; }}
                                                    placeholder="Enterprise Corp Ltd."
                                                    value={formData.company} onChange={handleChange}
                                                />
                                            </div>

                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Job Role</label>
                                                    <input
                                                        type="text" name="role"
                                                        style={{
                                                            width: '100%', padding: '8px 12px',
                                                            background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.15)',
                                                            borderRadius: '8px', color: '#fff', fontSize: '1rem',
                                                            outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box'
                                                        }}
                                                        onFocus={(e) => { e.target.style.borderColor = '#00D4FF'; e.target.style.boxShadow = '0 0 0 2px rgba(0, 212, 255, 0.2)'; }}
                                                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.target.style.boxShadow = 'none'; }}
                                                        placeholder="e.g. CFO, VP"
                                                        value={formData.role} onChange={handleChange}
                                                    />
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Primary Interest</label>
                                                    <select
                                                        name="interest"
                                                        style={{
                                                            width: '100%', padding: '8px 12px',
                                                            background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.15)',
                                                            borderRadius: '8px', color: '#fff', fontSize: '0.9rem',
                                                            outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', cursor: 'pointer', appearance: 'none', boxSizing: 'border-box',
                                                            backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%238E9BAE%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                                                            backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem top 50%', backgroundSize: '0.65rem auto', paddingRight: '2.5rem'
                                                        }}
                                                        onFocus={(e) => { e.target.style.borderColor = '#00D4FF'; e.target.style.boxShadow = '0 0 0 2px rgba(0, 212, 255, 0.2)'; }}
                                                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.target.style.boxShadow = 'none'; }}
                                                        value={formData.interest} onChange={handleChange}
                                                    >
                                                        <option value="procurement">Procurement</option>
                                                        <option value="finance">Finance</option>
                                                        <option value="compliance">Compliance</option>
                                                        <option value="operations">Operations</option>
                                                        <option value="all">Platform Overview</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Decision Timeframe</label>
                                                    <select
                                                        name="timeline" required
                                                        style={{
                                                            width: '100%', padding: '8px 12px',
                                                            background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.15)',
                                                            borderRadius: '8px', color: '#fff', fontSize: '0.9rem',
                                                            outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', cursor: 'pointer', appearance: 'none', boxSizing: 'border-box',
                                                            backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%238E9BAE%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                                                            backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem top 50%', backgroundSize: '0.65rem auto', paddingRight: '2.5rem'
                                                        }}
                                                        onFocus={(e) => { e.target.style.borderColor = '#00D4FF'; e.target.style.boxShadow = '0 0 0 2px rgba(0, 212, 255, 0.2)'; }}
                                                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.target.style.boxShadow = 'none'; }}
                                                        value={formData.timeline} onChange={handleChange}
                                                    >
                                                        <option value="" disabled>Select Timeframe...</option>
                                                        <option value="immediate">Immediately</option>
                                                        <option value="within_3_months">&lt; 3 Months (Q1)</option>
                                                        <option value="3_to_6_months">3 - 6 Months (H1)</option>
                                                        <option value="more_than_6_months">&gt; 6 Months (H2+)</option>
                                                    </select>
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Budget Approved?</label>
                                                    <select
                                                        name="budget" required
                                                        style={{
                                                            width: '100%', padding: '8px 12px',
                                                            background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.15)',
                                                            borderRadius: '8px', color: '#fff', fontSize: '0.9rem',
                                                            outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', cursor: 'pointer', appearance: 'none', boxSizing: 'border-box',
                                                            backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%238E9BAE%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
                                                            backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem top 50%', backgroundSize: '0.65rem auto', paddingRight: '2.5rem'
                                                        }}
                                                        onFocus={(e) => { e.target.style.borderColor = '#00D4FF'; e.target.style.boxShadow = '0 0 0 2px rgba(0, 212, 255, 0.2)'; }}
                                                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.target.style.boxShadow = 'none'; }}
                                                        value={formData.budget} onChange={handleChange}
                                                    >
                                                        <option value="" disabled>Select Status...</option>
                                                        <option value="yes_budgeted">Yes, Fully Funded</option>
                                                        <option value="in_review">In Budget Review</option>
                                                        <option value="no_budget_yet">Exploring Options (No Budget Yet)</option>
                                                    </select>
                                                </div>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Automation Layer</label>
                                                    <input
                                                        type="text" name="automationLayer"
                                                        style={{
                                                            width: '100%', padding: '8px 12px',
                                                            background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.15)',
                                                            borderRadius: '8px', color: '#fff', fontSize: '0.9rem',
                                                            outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box'
                                                        }}
                                                        onFocus={(e) => { e.target.style.borderColor = '#00D4FF'; e.target.style.boxShadow = '0 0 0 2px rgba(0, 212, 255, 0.2)'; }}
                                                        onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.target.style.boxShadow = 'none'; }}
                                                        placeholder="e.g. UiPath"
                                                        value={formData.automationLayer} onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                <label style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>Customized Requirements & Details</label>
                                                <textarea
                                                    name="comments"
                                                    style={{
                                                        width: '100%', padding: '8px 12px', minHeight: '80px',
                                                        background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.15)',
                                                        borderRadius: '8px', color: '#fff', fontSize: '0.9rem',
                                                        outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box',
                                                        resize: 'vertical'
                                                    }}
                                                    onFocus={(e) => { e.target.style.borderColor = '#00D4FF'; e.target.style.boxShadow = '0 0 0 2px rgba(0, 212, 255, 0.2)'; }}
                                                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.target.style.boxShadow = 'none'; }}
                                                    placeholder="Please provide any specific functional needs, current pain points, or custom requests..."
                                                    value={formData.comments} 
                                                    onChange={handleChange as unknown as React.ChangeEventHandler<HTMLTextAreaElement>}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                style={{
                                                    width: '100%', marginTop: '4px', padding: '10px',
                                                    background: type === 'demo' ? 'linear-gradient(135deg, #00D4FF 0%, #635BFF 100%)' : 'linear-gradient(135deg, #10B981 0%, #00D4FF 100%)',
                                                    color: '#fff', border: 'none', borderRadius: '8px',
                                                    fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'opacity 0.2s'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                            >
                                                {type === 'demo' ? 'Schedule Demo' : 'Submit'}
                                            </button>
                                        </form>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
    </AnimatePresence>
    );
};
