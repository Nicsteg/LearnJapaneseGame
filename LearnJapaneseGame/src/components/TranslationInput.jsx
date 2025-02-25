import { useState } from 'react';
import PropTypes from 'prop-types';

const TranslationInput = ({ onSubmit }) => {
  const [translation, setTranslation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(translation);  // Send the translation to the parent
    setTranslation('');  // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
        placeholder="Type your translation here"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
TranslationInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TranslationInput;
