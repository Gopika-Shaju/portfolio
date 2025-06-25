import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div
            style={{
                minHeight: '90vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #09b8f7 0%, #0e075f 100%)',
                color: '#fff',
                fontFamily: 'Segoe UI, sans-serif',
                textAlign: 'center',
                boxShadow: '0 12px 40px rgba(220,11,119,0.18)'
            }}
        >
            {/* Left Side: Text Content */}
            <div style={{ flex: 1, padding: '3rem' }}>
                <h4 style={{ fontWeight: 400, letterSpacing: 2, marginBottom: 0, fontSize: '2rem' }}>Hi there!</h4>
                <h1 style={{
                    fontSize: '4rem',
                    fontWeight: 700,
                    margin: '0.5rem 0',
                    background: 'linear-gradient(90deg, #fff 40%, #ffb8d1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    I'm a designer
                </h1>
                <h3 style={{
                    fontWeight: 300,
                    marginTop: 0,
                    fontStyle: 'italic',
                    opacity: 0.9,
                    fontSize: '2rem',
                    background: 'linear-gradient(90deg, #fff 0%, #09b8f7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}>
                    Simplicity is the soul of efficiency.
                </h3>

                <Button
                    href="#contact"
                    variant="info"
                    style={{
                        background: 'linear-gradient(90deg, #09b8f7 0%, #ffb8d1 100%)',
                        border: 'none',
                        color: '#fff',
                        fontWeight: 600,
                        fontSize: '1.3rem',
                        padding: '0.75rem 2.5rem',
                        boxShadow: '0 2px 12px rgba(9,184,247,0.22)'
                    }}
                >
                    Contact me
                </Button>
            </div>

            {/* Right Side: Image */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    src="/Gopu_img.jpg"
                    alt="Profile"
                    style={{
                        width: '370px',
                        height: '420px',
                        objectFit: 'cover',
                        borderRadius: '20px',
                        boxShadow: '0 6px 32px rgba(0,0,0,0.22)'
                    }}
                />
            </div>
        </div>
    )
}

export default Home
