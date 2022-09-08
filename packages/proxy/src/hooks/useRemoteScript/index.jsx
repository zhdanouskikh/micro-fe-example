import React from 'react';

const urlCache = new Set();
const useRemoteScript = url => {
  const [ready, setReady] = React.useState(false);
  const [error, setError] = React.useState();

  React.useEffect(() => {
    if (!url) {
      setReady(false);
      setError(new Error('Url not provided'));
      return;
    }

    if (urlCache.has(url)) {
      setReady(true);
      setError();
      return;
    }

    setReady(false);
    setError();

    const element = document.createElement('script');

    element.src = url;
    element.type = 'text/javascript';
    element.async = true;

    element.onload = () => {
      urlCache.add(url);
      setReady(true);
      setError();
    };

    element.onerror = (error) => {
      setReady(false);
      setError(error);
    };

    document.head.appendChild(element);

    return () => {
      urlCache.delete(url);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    error,
    ready,
  };
};

export default useRemoteScript;
