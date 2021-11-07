import React from 'react';
import PropTypes from 'prop-types';

export default function Results({ results }) {
  return (
    <section aria-label="result">
      <textarea>{JSON.stringify(results)}</textarea>
    </section>
  );
}

Results.propTypes = {
  results: PropTypes.string.isRequired,
};
