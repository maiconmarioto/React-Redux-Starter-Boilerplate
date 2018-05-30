const updateCacheOnRouteChange = e => {
  if (e.metaKey || e.ctrlKey) return;
  e.preventDefault();
  if (window.swUpdate) return (window.location = to);
  return router.history.push(to);
};

export default updateCacheOnRouteChange;
