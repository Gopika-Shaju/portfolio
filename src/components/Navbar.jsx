

function Navbar() {
return (
    <nav style={{
      background: '#222',
      padding: '1rem 2rem',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div
        style={{
          fontWeight: 'bold',
          fontSize: '1.5rem',
          background: 'linear-gradient(90deg,rgb(184, 228, 255),rgb(141, 129, 248))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textFillColor: 'transparent'
        }}
      >
        Gopika Shaju
      </div>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        margin: 0,
        padding: 0
      }}>
        <li>
          <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
        </li>
        <li>
          <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
        </li>
        <li>
          <a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a>
        </li>
        <li>
          <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar