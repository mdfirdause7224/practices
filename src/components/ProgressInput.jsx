import React, { useState } from 'react';
import './ProgressInput.css';

const ProgressInput = ({ onProgressChange, onError }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const numberValue = Number(value);
    
    if (value === '') {
      onProgressChange(0);
      onError('');
    } else if (isNaN(numberValue)) {
      onError('Please enter a valid number');
      onProgressChange(0);
    } else if (numberValue < 0) {
      onError('Progress cannot be negative');
      onProgressChange(0);
    } else if (numberValue > 100) {
      onError('Progress cannot exceed 100%');
      onProgressChange(0);
    } else {
      onError('');
      onProgressChange(numberValue);
    }
  };

  return (
    <div className="progress-input">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter progress (0-100)"
        className="progress-input-field"
      />
    </div>
  );
};

export default ProgressInput;