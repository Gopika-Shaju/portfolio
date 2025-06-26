import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can integrate EmailJS or any backend for real submission
  };

return (
    <div id='contact' style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #09b8f7 0%, #0e075f 100%)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Segoe UI, Arial, sans-serif',
        padding: '3rem 1rem',
        position: 'relative',
    }}>
        {/* Contact Form Section */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '1px' }}>Contact Me</h1>
            <p style={{ color: '#b8e6ff', fontSize: '1.1rem', marginBottom: '2rem', textAlign: 'center', maxWidth: 500 }}>
                Have a question, want to work together, or just want to say hi? Fill out the form below and I'll get back to you soon!
            </p>
            {/* Add Contact Number Here */}
            <div style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '1.5rem', fontWeight: 600 }}>
                <span>Contact No: </span>
                <a href="tel:+0000000000" style={{ color: '#b8e6ff', textDecoration: 'underline' }}>+91 00000 00000</a>
            </div>
            
            <form onSubmit={handleSubmit} style={{
                background: 'rgba(255,255,255,0.10)',
                borderRadius: '1.5rem',
                boxShadow: '0 8px 32px 0 rgba(14,7,95,0.18)',
                padding: '2.5rem 2rem',
                maxWidth: 600, // Increased from 400 to 600
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
            }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={{
                        padding: '0.9rem 1rem',
                        borderRadius: '0.8rem',
                        border: 'none',
                        fontSize: '1rem',
                        background: 'rgba(255,255,255,0.18)',
                        color: 'white',
                        outline: 'none',
                    }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{
                        padding: '0.9rem 1rem',
                        borderRadius: '0.8rem',
                        border: 'none',
                        fontSize: '1rem',
                        background: 'rgba(255,255,255,0.18)',
                        color: 'white',
                        outline: 'none',
                    }}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                        padding: '0.9rem 1rem',
                        borderRadius: '0.8rem',
                        border: 'none',
                        fontSize: '1rem',
                        background: 'rgba(255,255,255,0.18)',
                        color: 'white',
                        outline: 'none',
                        resize: 'vertical',
                    }}
                />
                <button
                    type="submit"
                    style={{
                        background: 'linear-gradient(90deg,#762df5,#09b8f7 80%)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        border: 'none',
                        borderRadius: '0.8rem',
                        padding: '0.9rem',
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(14,7,95,0.10)',
                        transition: 'background 0.2s',
                    }}
                >
                    {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
            </form>
        </div>
        {/* Social Icons Section */}
        <div style={{
            position: 'absolute',
            right: '2.5rem',
            bottom: '2.5rem',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
            zIndex: 100,
        }}>
            <a href="https://www.linkedin.com/in/gopika-shaju-271299255/" target="_blank" rel="noopener noreferrer">
                <svg width="60" height="60" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.22"/><path d="M8.1 10.7H5.9V18h2.2v-7.3zM7 9.7c.7 0 1.2-.6 1.2-1.2 0-.7-.5-1.2-1.2-1.2-.7 0-1.2.5-1.2 1.2 0 .6.5 1.2 1.2 1.2zm4.2 1c-.1 0-.2.1-.2.2V18h2.2v-3.7c0-1 .2-2 1.4-2s1.2 1.2 1.2 2V18h2.2v-4.1c0-2.1-.5-3.2-2.5-3.2-1.1 0-1.7.6-2 1.1v-1z" fill="#fff"/></svg>
            </a>
            <a href="https://github.com/Gopika-Shaju" target="_blank" rel="noopener noreferrer">
                <svg width="60" height="60" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.22"/><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.8 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1-.9-1.3-.9-1.3-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.8.8 2.2.6.1-.5.3-.8.5-1-2.2-.2-4.5-1.1-4.5-4.8 0-1 .4-1.8 1-2.5-.1-.2-.4-1.1.1-2.2 0 0 .8-.2 2.6 1 .7-.2 1.5-.3 2.2-.3.7 0 1.5.1 2.2.3 1.8-1.2 2.6-1 2.6-1 .5 1.1.2 2 .1 2.2.6.7 1 1.5 1 2.5 0 3.7-2.3 4.6-4.5 4.8.3.3.6.8.6 1.7v2.5c0 .3.2.6.7.5C19.1 20.1 22 16.4 22 12c0-5.5-4.5-10-10-10z" fill="#fff"/></svg>
            </a>
            <a href="mailto:gopikashaju18@gmail.com">
                <svg width="60" height="60" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.22"/><path d="M6 8.5v7c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-7c0-.8-.7-1.5-1.5-1.5h-9C6.7 7 6 7.7 6 8.5zm1.7.5h8.6l-4.3 3.2-4.3-3.2zm-.7 1.2l4.6 3.4c.2.1.5.1.7 0l4.6-3.4V15c0 .3-.2.5-.5.5h-9c-.3 0-.5-.2-.5-.5V10.2z" fill="#fff"/></svg>
            </a>
        </div>
    </div>
  );
}

export default Contact