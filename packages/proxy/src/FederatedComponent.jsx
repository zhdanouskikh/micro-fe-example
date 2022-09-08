import React from 'react';
import useFederatedComponent from './hooks/useFederatedComponent';
import RemoteWrapper from './RemoteWrapper';

const App = (props) => {
  const { error, Component } = useFederatedComponent(props.remote.url, props.remote.scope, props.remote.module);

  if (error) {
    throw error;
  }

  return (
    <RemoteWrapper>
      {
        !error && Component && <Component />
      }
    </RemoteWrapper>
  );
}

export default App;
