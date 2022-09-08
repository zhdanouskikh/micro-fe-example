import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import RemoteWrapper from './RemoteWrapper';

const RemoteApp = React.lazy(() => import('remote/App'));
const RemoteButton = React.lazy(() => import('remote/Button'));

const App = () => (
  <ErrorBoundary>
    <div>
      <RemoteWrapper>
        <RemoteApp />
      </RemoteWrapper>
    </div>
    <div>
      <RemoteWrapper>
        <RemoteButton />
      </RemoteWrapper>
    </div>
  </ErrorBoundary>
);

export default App;
