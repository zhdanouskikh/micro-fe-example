# React App

Pulls `<App/>` and `<Button />` from the remote app and renders them. Example:

```js
const RemoteApp = React.lazy(() => import('remote/App'));
```

See `webpack.config.js` to learn more about connecting remote micro-fe using Webpack Module Federation.