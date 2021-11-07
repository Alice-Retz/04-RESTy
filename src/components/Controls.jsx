import React from 'react';
import PropTypes from 'prop-types';

export default function Controls({
  url,
  json,
  onURLChange,
  onRouteChange,
  onSubmit,
  onJsonChange,
}) {
  return (
    <main aria-label="controls">
      <form onSubmit={onSubmit}>
        <input type="url" value={url} onChange={onURLChange} />
        <section role="radiogroup">
          <label htmlFor="get" aria-label="get">
            get
          </label>
          <input
            type="radio"
            name="route"
            value="get"
            onChange={onRouteChange}
          />

          <label htmlFor="post" aria-label="post">
            post
          </label>
          <input
            type="radio"
            name="route"
            value="post"
            onChange={onRouteChange}
          />

          <label htmlFor="put" aria-label="put">
            put
          </label>
          <input
            type="radio"
            name="route"
            value="put"
            onChange={onRouteChange}
          />

          <label htmlFor="delete" aria-label="delete">
            delete
          </label>
          <input
            type="radio"
            name="route"
            value="delete"
            onChange={onRouteChange}
          />
        </section>

        <textarea
          aria-label="json-input"
          value={json}
          onChange={onJsonChange}
        ></textarea>
        <button aria-label="submit">submit</button>
      </form>
    </main>
  );
}

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  json: PropTypes.string.isRequired,
  onURLChange: PropTypes.func.isRequired,
  onRouteChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onJsonChange: PropTypes.func.isRequired,
};
