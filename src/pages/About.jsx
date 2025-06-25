import React, { useState } from 'react'

function About() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            id='about'
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #09b8f7 0%, #0e075f 100%)',
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem',
                color: 'white',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            }}
        >
            {/* Page Heading at left top */}
            <h2
                style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '2rem',
                    letterSpacing: '-0.01em',
                    color: '#fff',
                    textAlign: 'left',
                    alignSelf: 'flex-start',
                    marginLeft: '1rem',
                    marginTop: '0',
                    animation: 'fadeIn 1s ease'
                }}
            >
                About me
            </h2>

            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div
                    style={{
                        maxWidth: '600px',
                        textAlign: 'center',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '24px',
                        padding: '3rem 2.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
                        animation: 'fadeInUp 1s ease-out',
                        transition: 'transform 0.3s cubic-bezier(.22,1,.36,1)', // Smooth transition
                        transform: hovered ? 'scale(1.05)' : 'scale(1)' // Pop up on hover
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #762df5 0%, #766ce5 100%)',
                            margin: '0 auto 2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '3rem',
                            fontWeight: 'bold',
                            color: 'white',
                            boxShadow: '0 10px 30px rgba(118, 45, 245, 0.3)',
                            animation: 'bounceIn 1.2s cubic-bezier(.68,-0.55,.27,1.55)'
                        }}
                    >
                        GS
                    </div>
                    
                    <h1
                        style={{
                            background: 'linear-gradient(90deg,rgb(137, 83, 237),rgb(253, 253, 255))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            marginBottom: '0.5rem',
                            letterSpacing: '-0.02em'
                        }}
                    >
                        Gopika Shaju
                    </h1>
                    
                    <div
                        style={{
                            display: 'inline-block',
                            background: 'linear-gradient(90deg, #762df5, #766ce5)',
                            padding: '0.5rem 1.5rem',
                            borderRadius: '50px',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            marginBottom: '2rem',
                            letterSpacing: '0.05em'
                        }}
                    >
                        React Developer
                    </div>
                    
                    <p
                        style={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '1.1rem',
                            lineHeight: '1.6',
                            marginBottom: '2rem',
                            fontWeight: '400'
                        }}
                    >
                        Passionate about crafting modern web applications with clean, responsive designs. 
                        I specialize in React, JavaScript, and creating user-friendly interfaces that blend 
                        functionality with beautiful aesthetics.
                    </p>
                    
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '1rem',
                            flexWrap: 'wrap'
                        }}
                    >
                        {['React', 'JavaScript', 'UI/UX', 'Frontend'].map((skill, index) => (
                            <span
                                key={skill}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.15)',
                                    padding: '0.4rem 1rem',
                                    borderRadius: '20px',
                                    fontSize: '0.85rem',
                                    fontWeight: '500',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    animation: `skillFloat 3s ease-in-out ${index * 0.2 + 1.2}s infinite alternate, fadeIn 0.8s ${index * 0.2 + 1.2}s both`
                                }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes bounceIn {
                    0% {
                        opacity: 0;
                        transform: scale(0.3);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.05);
                    }
                    70% {
                        transform: scale(0.9);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                @keyframes skillFloat {
                    from {
                        transform: translateY(0px);
                    }
                    to {
                        transform: translateY(-5px);
                    }
                }
            `}</style>
        </div>
    )
}

export default About