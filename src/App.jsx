import React, { useState } from 'react'
import Header from './components/Header'
import BMIForm from './components/BMIForm'
import BMIResult from './components/BMIResult'

function App() {
  const [bmi, setBmi] = useState(null)

  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 120px)',
        padding: '20px'
      }}>
        {!bmi ? (
          <BMIForm onCalculate={setBmi} />
        ) : (
          <BMIResult bmi={bmi} onReset={() => setBmi(null)} />
        )}
      </div>
    </div>
  )
}

export default App