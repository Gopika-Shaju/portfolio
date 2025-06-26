import { useEffect, useState } from 'react';

function Project() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const cardStyle = (index) => ({
        flex: 1,
        minWidth: '26rem',
        maxWidth: '38rem',
        display: 'flex',
        alignItems: 'stretch',
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
        opacity: isVisible ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`,
    });

    const cardInnerStyle = (index) => ({
        width: '100%',
        background: hoveredCard === index 
            ? 'rgba(255,255,255,0.25)' 
            : 'rgba(255,255,255,0.18)',
        border: hoveredCard === index 
            ? '1.5px solid rgba(255,255,255,0.4)' 
            : '1.5px solid rgba(255,255,255,0.25)',
        minHeight: '18rem', // Further reduced from 22rem to 18rem
        borderRadius: '1.5rem',
        boxShadow: hoveredCard === index 
            ? '0 20px 40px rgba(14,7,95,0.3), 0 8px 16px rgba(9,184,247,0.2), inset 0 1px 0 rgba(255,255,255,0.1)' 
            : '0 8px 32px rgba(14,7,95,0.18), 0 1.5px 8px rgba(9,184,247,0.10)',
        overflow: 'hidden',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hoveredCard === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        position: 'relative',
    });

    const titleStyle = {
        fontWeight: 'bold',
        fontSize: '1.6rem', // Further reduced from 1.75rem
        background: 'linear-gradient(135deg, #0e075f 0%, #e8f4ff 100%)', // dark blue to white
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
        padding: '1rem 1.5rem 0.3rem 1.5rem', // Further reduced padding
        letterSpacing: '1px',
        textShadow: '0 2px 16px rgba(14,7,95,0.10)',
        animation: 'shimmer 3s ease-in-out infinite',
    };

    const floatingElements = [
        { size: 120, left: '10%', top: '15%', delay: 0 },
        { size: 80, left: '85%', top: '25%', delay: 1 },
        { size: 60, left: '75%', top: '70%', delay: 2 },
        { size: 100, left: '5%', top: '80%', delay: 1.5 },
    ];

    return (
        <>
            <style>
                {`
                @keyframes shimmer {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(2deg); }
                    66% { transform: translateY(5px) rotate(-1deg); }
                }
                
                @keyframes pulse-glow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.1); }
                }
                
                .floating-orb {
                    position: absolute;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(118,45,245,0.3) 0%, rgba(9,184,247,0.1) 70%, transparent 100%);
                    pointer-events: none;
                    animation: float 6s ease-in-out infinite;
                }

                .feature-item {
                    transition: all 0.3s ease;
                    padding: 0.2rem 0; // Reduced padding
                    border-radius: 0.5rem;
                    margin: 0.1rem 0; // Reduced margin
                    color: #b8e6ff;
                }

                .feature-item:hover {
                    background: rgba(118,45,245,0.15);
                    padding-left: 0.5rem;
                    transform: translateX(5px);
                    color: #09b8f7;
                }

                .tech-badge {
                    display: inline-block;
                    background: linear-gradient(45deg, rgba(118,45,245,0.2), rgba(118,160,229,0.2));
                    border: 1px solid rgba(118,45,245,0.3);
                    border-radius: 1rem;
                    padding: 0.25rem 0.7rem; // Slightly reduced padding
                    margin: 0.15rem 0.25rem 0.15rem 0; // Reduced margins
                    font-size: 0.85rem; // Slightly smaller font
                    font-weight: 500;
                    transition: all 0.3s ease;
                    color: #b8e6ff;
                }

                .tech-badge:hover {
                    background: linear-gradient(45deg, rgba(118,45,245,0.3), rgba(118,160,229,0.3));
                    transform: scale(1.05);
                    box-shadow: 0 4px 12px rgba(118,45,245,0.2);
                    color: #09b8f7;
                }
                `}
            </style>
            
            <div id='projects'
                style={{
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #09b8f7 0%, #0e075f 100%)',
                    padding: '5rem 2rem 3rem 2rem', // Added horizontal padding for invisible margins
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Segoe UI, Arial, sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Projects Heading - Repositioned */}
                <div
                    style={{
                        fontSize: '2.8rem', // Increased from 2.4rem
                        fontWeight: 'bolder',
                        background: 'linear-gradient(135deg, #ffffff 0%, #b8e6ff 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                        letterSpacing: '2px',
                        textShadow: '0 4px 20px rgba(255,255,255,0.1)',
                        zIndex: 20,
                        marginBottom: '3rem', // Added margin below heading
                        textAlign: 'center',
                    }}
                >
                    <b>Projects</b>
                </div>

                {/* Floating Background Elements */}
                {floatingElements.map((elem, index) => (
                    <div
                        key={index}
                        className="floating-orb"
                        style={{
                            width: elem.size,
                            height: elem.size,
                            left: elem.left,
                            top: elem.top,
                            animationDelay: `${elem.delay}s`,
                            animationDuration: `${6 + index}s`,
                        }}
                    />
                ))}

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '3rem', // Increased gap between cards
                        width: '100%',
                        maxWidth: '90rem', // Increased max width to accommodate wider cards
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        position: 'relative',
                        zIndex: 10,
                        margin: '0 auto', // Center the card container
                    }}
                >
                    {/* Card 1 - LegalEase */}
                    <div
                        style={cardStyle(0)}
                        onMouseEnter={() => setHoveredCard(0)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div style={cardInnerStyle(0)}>
                            {/* Hover glow effect */}
                            {hoveredCard === 0 && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(45deg, rgba(118,45,245,0.1), rgba(9,184,247,0.1))',
                                        animation: 'pulse-glow 2s ease-in-out infinite',
                                        borderRadius: '1.5rem',
                                        pointerEvents: 'none',
                                    }}
                                />
                            )}
                            
                            <div style={titleStyle}>
                                LegalEase
                            </div>
                            <div style={{ padding: '0 1.5rem 1.2rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h5
                                    style={{
                                        color: '#e8f4ff',
                                        fontSize: '1rem', // Further reduced font size
                                        fontWeight: 700,
                                        margin: '0.6rem 0 0.8rem 0', // Further reduced margins
                                        letterSpacing: '0.5px',
                                        transition: 'color 0.3s ease',
                                    }}
                                >
                                    AI-powered Legal Assistant
                                </h5>
                                <div
                                    style={{
                                        color: 'white',
                                        fontSize: '0.95rem', // Reduced font size
                                        lineHeight: 1.6, // Slightly reduced line height
                                        letterSpacing: '0.01em',
                                        flex: 1,
                                    }}
                                >
                                    <span style={{ opacity: 0.95 }}>
                                        LegalEase is an AI-powered legal assistant designed to make legal help more accessible in India, especially for those facing language barriers or unable to afford lawyers.
                                    </span>
                                    <br /><br />
                                    <b style={{ color: '#b8e6ff', fontSize: '1rem' }}>Key Features:</b>
                                    <ul style={{ marginLeft: '1rem', marginBottom: '1rem', listStyle: 'none', paddingLeft: 0 }}>
                                        {[
                                            'Supports English and Malayalam languages',
                                            'Legal question answering',
                                            'Case law search',
                                            'IPC section lookup',
                                            'Voice input for queries',
                                            'Document summarization'
                                        ].map((feature, idx) => (
                                            <li key={idx} className="feature-item" style={{ position: 'relative', paddingLeft: '1.2rem' }}>
                                                <span style={{ 
                                                    position: 'absolute', 
                                                    left: 0, 
                                                    color: '#09b8f7', 
                                                    fontWeight: 'bold' 
                                                }}>•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animated Divider */}
                    <div 
                        style={{ 
                            width: '2px', 
                            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)', 
                            borderRadius: '1px', 
                            margin: '0 0.5rem',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '30%',
                                background: 'linear-gradient(to bottom, rgba(118,45,245,0.8), transparent)',
                                animation: 'float 3s ease-in-out infinite',
                            }}
                        />
                    </div>

                    {/* Card 2 - Portfolio */}
                    <div
                        style={cardStyle(1)}
                        onMouseEnter={() => setHoveredCard(1)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div style={cardInnerStyle(1)}>
                            {/* Hover glow effect */}
                            {hoveredCard === 1 && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(45deg, rgba(118,45,245,0.1), rgba(9,184,247,0.1))',
                                        animation: 'pulse-glow 2s ease-in-out infinite',
                                        borderRadius: '1.5rem',
                                        pointerEvents: 'none',
                                    }}
                                />
                            )}
                            
                            <div style={titleStyle}>
                                Portfolio
                            </div>
                            <div style={{ padding: '0 1.5rem 1.2rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h5
                                    style={{
                                       color: '#e8f4ff',
                                        fontSize: '1rem', // Further reduced font size
                                        fontWeight: 700,
                                        margin: '0.6rem 0 0.8rem 0', // Further reduced margins
                                        letterSpacing: '0.5px',
                                        transition: 'color 0.3s ease',
                                    }}
                                >
                                    Personal Portfolio Website
                                </h5>
                                <div
                                    style={{
                                        color: 'white',
                                        fontSize: '0.95rem', // Reduced font size
                                        lineHeight: 1.6, // Slightly reduced line height
                                        letterSpacing: '0.01em',
                                        flex: 1,
                                    }}
                                >
                                    <span style={{ opacity: 0.95 }}>
                                        A modern, responsive portfolio website to showcase my projects, skills, and experience. Designed for a seamless user experience and easy navigation.
                                    </span>
                                    <br /><br />
                                    <b style={{ color: '#b8e6ff', fontSize: '1rem' }}>Key Features:</b>
                                    <ul style={{ marginLeft: '1rem', marginBottom: '1rem', listStyle: 'none', paddingLeft: 0 }}>
                                        {[
                                            'Responsive design for all devices',
                                            'Project gallery with images and links',
                                            'Animated transitions and smooth scrolling',
                                            'Contact form with email integration',
                                            'Downloadable resume'
                                        ].map((feature, idx) => (
                                            <li key={idx} className="feature-item" style={{ position: 'relative', paddingLeft: '1.2rem' }}>
                                                <span style={{ 
                                                    position: 'absolute', 
                                                    left: 0, 
                                                    color: '#09b8f7', 
                                                    fontWeight: 'bold' 
                                                }}>•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <b style={{ color: '#b8e6ff', fontSize: '1rem' }}>Tech Stack:</b>
                                    <div style={{ marginTop: '0.6rem' }}>
                                        {['React.js', 'Vite', 'CSS Modules', 'Flexbox', 'EmailJS'].map((tech, idx) => (
                                            <span key={idx} className="tech-badge">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;