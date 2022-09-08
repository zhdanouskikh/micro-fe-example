import React from 'react';

const RemoteWrapper = ({ children }) => (
  <React.Suspense fallback='Loading remote component'>
    {children}
  </React.Suspense>
);

export default RemoteWrapper;
