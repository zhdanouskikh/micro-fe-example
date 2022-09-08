const initialize = (containerId, remote) => import('./bootstrap').then((module) => module.default(containerId, remote));

export default initialize;
