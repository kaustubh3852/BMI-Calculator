import React from 'react'

function Header() {
    return (
        <div style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center',
            padding: '30px',
            borderBottom: '1px solid rgba(255,255,255,0.2)'
        }}>
            <h1 style={{
                color: 'white',
                fontSize: '2.5rem',
                fontWeight: '700',
                letterSpacing: '2px',
                marginBottom: '5px',
                fontFamily:"fangsong"
            }}> BMI Calculator</h1>
            <p style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1rem',
                fontWeight: '400',
                margin: 0
            }}>Know your Body Mass Index instantly</p>
        </div>
    )
}

export default Header