import { useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'
import ProgressInput from './components/ProgressInput'
import ErrorMessage from './components/ErrorMessage'

function App() {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const handleProgressChange = (newProgress) => {
    setProgress(newProgress);
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
  };

  return (
    <div className="app-container">
      <h1>React Progress Bar Demo</h1>
      <div className="progress-section">
        <ProgressBar progress={progress} />
        <ProgressInput 
          onProgressChange={handleProgressChange}
          onError={handleError}
        />
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  )
}

export default App
