import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import FederatedComponent from './FederatedComponent';

const App = (props) => (
  <ErrorBoundary>
    <FederatedComponent remote={props.remote} />
  </ErrorBoundary>
);

export default App;
