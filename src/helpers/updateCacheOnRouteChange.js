import { router } from "react-router-dom";
import history from "../history";

const updateCacheOnRouteChange = (to, e) => {
  if (e.metaKey || e.ctrlKey) return;
  e.preventDefault();
  if (window.swUpdate) return (window.location = to); //
  return history.push(to);
};

export default updateCacheOnRouteChange;
