# Remote Proxy

Proxy to dynamically load micro-fe using Webpack Module Federation as a standalone react app. Use when you want to load micro-fe into non-react environment.
Code mostly copy pasted from webpack docs.

## Usage example

```js
  <script type="module">
    import initialize from 'http://localhost:3001/main.js'; // loads initialize function from micro-fe proxy

    initialize('<htmlElementId>', {
      url: '<remoteMicroFeEntryUrl>', // e.x. 'http://localhost:3000/remoteEntry.js'
      scope: '<remoteScopeName>', // e.s. 'remote'
      module: '<exposedModulePath>', // e.x. './App'
    });
  </script>
```