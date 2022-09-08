import React from 'react';
import useRemoteScript from '../useRemoteScript';
import loadComponent from './loadComponent';

const componentCache = new Map();
const useFederatedComponent = (remoteUrl, scope, module) => {
  const key = `${remoteUrl}-${scope}-${module}`;

  const { ready, error } = useRemoteScript(remoteUrl);
  const [Component, setComponent] = React.useState(null);

  React.useEffect(() => {
    if (Component) setComponent(null);
  }, [key]);

  React.useEffect(() => {
    if (ready && !Component) {
      const FederatedComponent = React.lazy(loadComponent(scope, module));
      componentCache.set(key, FederatedComponent);
      setComponent(FederatedComponent);
    }
  }, [Component, ready, key]);

  return { error, Component };
};

export default useFederatedComponent;