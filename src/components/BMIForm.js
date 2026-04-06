import React, { useState } from 'react'

function BMIForm({ onCalculate }) {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const handleSubmit = () => {
        if (height && weight) {
            const bmi = (weight / ((height / 100) ** 2)).toFixed(1)
            onCalculate(bmi)
        }
    }

    return (
        <div style={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '20px',
            padding: '35px',
            width: '100%',
            maxWidth: '420px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
        }}>
            <h2 style={{
                color: '#764ba2',
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: '25px',
                // fontSize: '2rem',
                fontFamily: "-apple-system"
            }}>Enter Your Details</h2>

            <div className="mb-3">
                <label style={{fontWeight: '600', color: '#444',fontSize: '1rem'}}>Height (cm)</label>
                <input
                    type="number"
                    className="form-control  mt-1"
                    placeholder="e.g. 170"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    style={{borderRadius: '10px', border: '1px solid #e0d7f5'}}
                />
            </div>

            <div className="mb-4">
                <label style={{fontWeight: '600', color: '#444', fontSize: '1rem'}}>Weight (kg)</label>
                <input
                    type="number"
                    className="form-control mt-1"
                    placeholder="e.g. 65"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    style={{borderRadius: '10px', border: '2px solid #e0d7f5'}}
                />
            </div>

            <button
                className="btn btn-lg w-100 fw-bold"
                onClick={handleSubmit}
                style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    borderRadius: '10px',
                    border: 'none',
                    padding: '12px',
                    fontSize: '1.3rem',
                    letterSpacing: '0.5px',
                    fontFamily: "initial"
                }}
            >
                Calculate BMI 
            </button>
        </div>
    )
}

export default BMIForm