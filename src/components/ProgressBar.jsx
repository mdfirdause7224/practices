import './ProgressBar.css';

const ProgressBar = ({ progress, height = '20px', color = '#4CAF50' }) => {
  return (
    <div className="progress-bar-container" style={{ height }}>
      <div
        className="progress-bar-fill"
        style={{
          width: `${progress}%`,
          backgroundColor: color,
          height: '100%',
          transition: 'width 0.5s ease-in-out',
        }}
      />
      <span className="progress-text">{progress}%</span>
    </div>
  );
};

export default ProgressBar;