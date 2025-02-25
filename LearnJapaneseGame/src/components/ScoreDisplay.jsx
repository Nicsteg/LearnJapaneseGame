import PropTypes from 'prop-types';

const ScoreDisplay = ({ score }) => {
  return (
    <div>
      <h3>Your Score: {score}</h3>
    </div>
  );
};

ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreDisplay;

