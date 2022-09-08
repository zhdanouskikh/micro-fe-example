import React from 'react';

class ErrorBoundary extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.error) {
      return (
        <React.Fragment>
          <h1>Something went wrong.</h1>
          <h2>{this.state.error}</h2>
        </React.Fragment>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary