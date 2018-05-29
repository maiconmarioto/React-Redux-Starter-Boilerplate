import React from "react";
import ReactDelayRender from "react-delay-render";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";

const Loading = props => {
  return <CircularProgress className={classes.progress} />;
};

export default ReactDelayRender({ delay: 300 })(Loading);
