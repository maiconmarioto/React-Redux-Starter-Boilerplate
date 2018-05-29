import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { card, media, center } from "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className={center}>
      <Card className={card}>
        <CardMedia
          className={media}
          image="https://haxeflixel.com/documentation/images/00_getting_started/hello-world.png"
          title="Hello World!"
        />
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
};

export default Layout;
