import React from 'react'

function BMIResult({ bmi, onReset }) {
    const getCategory = () => {
        if (bmi < 18.5) return { text: 'Underweight', color: '#f59e0b', emoji: '⚠️', tip: 'You need to eat more nutritious food.' }
        if (bmi < 25) return { text: 'Normal Weight', color: '#10b981', emoji: '✅', tip: 'Great! Keep maintaining your healthy lifestyle.' }
        if (bmi < 30) return { text: 'Overweight', color: '#f97316', emoji: '⚠️', tip: 'Consider exercising regularly and eating healthy.' }
        return { text: 'Obese', color: '#ef4444', emoji: '🚨', tip: 'Please consult a doctor for proper guidance.' }
    }

    const category = getCategory()

    const categories = [
        { label: 'Underweight', range: '< 18.5', color: '#f59e0b' },
        { label: 'Normal', range: '18.5 - 24.9', color: '#10b981' },
        { label: 'Overweight', range: '25 - 29.9', color: '#f97316' },
        { label: 'Obese', range: '> 30', color: '#ef4444' },
    ]

    return (
        <div style={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '20px',
            padding: '35px',
            width: '100%',
            maxWidth: '420px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
            textAlign: 'center'
        }}>
            <h4 style={{color: '#764ba2', fontWeight: '700', fontSize: '1.4rem', marginBottom: '15px'}}>Your Result</h4>

            <div style={{fontSize: '4rem', fontWeight: '700', color: category.color}}>
                {bmi}
            </div>

            <div style={{fontSize: '1.4rem', fontWeight: '600', margin: '8px 0', color: category.color}}>
                {category.emoji} {category.text}
            </div>

            <p style={{color: '#666', fontSize: '0.95rem', marginBottom: '20px'}}>{category.tip}</p>

            <hr />

            <p style={{color: '#888', fontSize: '0.85rem', marginBottom: '10px', fontWeight: '600'}}>BMI Categories</p>

            <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px'}}>
                {categories.map((cat) => (
                    <div key={cat.label} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: cat.color + '20',
                        borderLeft: `4px solid ${cat.color}`,
                        borderRadius: '8px',
                        padding: '8px 14px'
                    }}>
                        <span style={{fontWeight: '600', color: cat.color}}>{cat.label}</span>
                        <span style={{color: '#555', fontSize: '0.9rem'}}>{cat.range}</span>
                    </div>
                ))}
            </div>

            <button
                className="btn btn-lg w-100 fw-bold"
                onClick={onReset}
                style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    borderRadius: '10px',
                    border: 'none',
                    padding: '12px',
                    fontSize: '1.1rem'
                }}
            >
                Calculate Again 🔄
            </button>
        </div>
    )
}

export default BMIResult