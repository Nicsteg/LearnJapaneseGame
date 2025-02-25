import PropTypes from 'prop-types';

const SentenceDisplay = ({ sentence }) => {
  return (
    <div>
      <h2>Translate this sentence to Japanese:</h2>
      <p>{sentence}</p>
    </div>
  );
};

SentenceDisplay.propTypes = {
  sentence: PropTypes.string.isRequired,
};

export default SentenceDisplay;
