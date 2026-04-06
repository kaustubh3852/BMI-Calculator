import React, { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

function Auth() {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        setError('')
        setLoading(true)
        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password)
            } else {
                if (password.length < 6) {
                    setError('Password kam se kam 6 characters ka hona chahiye')
                    setLoading(false)
                    return
                }
                await createUserWithEmailAndPassword(auth, email, password)
            }
        } catch (err) {
            if (err.code === 'auth/user-not-found') setError('Email registered nahi hai')
            else if (err.code === 'auth/wrong-password') setError('Password galat hai')
            else if (err.code === 'auth/email-already-in-use') setError('Email already use mein hai')
            else if (err.code === 'auth/invalid-email') setError('Valid email enter karo')
            else setError('Kuch error aaya, dobara try karo')
        }
        setLoading(false)
    }

    return (
        <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center px-3"
            style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>

            {/* Logo */}
            <div className="text-center mb-4">
                <div style={{ fontSize: '2.8rem' }}>⚖️</div>
                <h1 className="fw-bold text-white mb-1" style={{ letterSpacing: '2px' }}>BMI Calculator</h1>
                <p style={{ color: 'rgba(255,255,255,0.75)' }} className="mb-0">Know your Body Mass Index instantly</p>
            </div>

            {/* Card — fixed height so no jumping */}
            <div className="rounded-4 p-4 w-100" style={{
                maxWidth: '420px',
                background: 'rgba(255,255,255,0.97)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                minHeight: '380px'
            }}>
                {/* Tabs */}
                <div className="d-flex rounded-3 p-1 mb-4" style={{ background: '#f3f0fa' }}>
                    {['Login', 'Sign Up'].map((tab) => (
                        <button key={tab}
                            className="btn flex-fill fw-semibold py-2 transition"
                            onClick={() => { setIsLogin(tab === 'Login'); setError('') }}
                            style={{
                                borderRadius: '10px',
                                border: 'none',
                                transition: 'all 0.25s ease',
                                background: (isLogin ? tab === 'Login' : tab === 'Sign Up')
                                    ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'transparent',
                                color: (isLogin ? tab === 'Login' : tab === 'Sign Up') ? 'white' : '#764ba2',
                            }}>
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Error */}
                <div style={{ minHeight: '40px' }}>
                    {error && (
                        <div className="alert alert-danger py-2 px-3 mb-3" style={{ fontSize: '0.85rem' }}>
                            ⚠️ {error}
                        </div>
                    )}
                </div>

                {/* Name field — takes space even when hidden to avoid jump */}
                <div className="mb-3" style={{ visibility: isLogin ? 'hidden' : 'visible', height: '72px' }}>
                    <label className="form-label fw-semibold" style={{ color: '#444' }}>Full Name</label>
                    <input type="text" className="form-control form-control-lg"
                        placeholder="Your Name" value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ borderRadius: '10px', border: '2px solid #e0d7f5' }} />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-semibold" style={{ color: '#444' }}>Email</label>
                    <input type="email" className="form-control form-control-lg"
                        placeholder="you@example.com" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ borderRadius: '10px', border: '2px solid #e0d7f5' }} />
                </div>

                <div className="mb-4">
                    <label className="form-label fw-semibold" style={{ color: '#444' }}>Password</label>
                    <input type="password" className="form-control form-control-lg"
                        placeholder={isLogin ? '••••••••' : 'Min 6 characters'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        style={{ borderRadius: '10px', border: '2px solid #e0d7f5' }} />
                </div>

                <button className="btn btn-lg w-100 fw-bold text-white"
                    onClick={handleSubmit} disabled={loading}
                    style={{
                        borderRadius: '10px', border: 'none',
                        background: loading ? '#b0a0d0' : 'linear-gradient(135deg, #667eea, #764ba2)',
                        letterSpacing: '1px', transition: 'opacity 0.2s'
                    }}>
                    {loading ? 'Please wait...' : (isLogin ? 'Login →' : 'Create Account →')}
                </button>
            </div>
        </div>
    )
}

export default Auth