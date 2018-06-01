import React from "react";
import { Button as MaterialButton } from "@material-ui/core";

const Button = ({ children, onClick, disabled, variant, color }) => {
  return (
    <MaterialButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      color={color}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
