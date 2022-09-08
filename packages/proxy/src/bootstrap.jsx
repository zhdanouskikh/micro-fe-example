import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const initialize = (containerId, { url, scope, module }) => {
  const domElement = document.querySelector(`#${containerId}`);
  const root = ReactDOM.createRoot(domElement);

  root.render(
    <React.StrictMode>
      <App
        remote={{
          url,
          scope,
          module
        }}
      />
    </React.StrictMode>
  );
};

export default initialize;
