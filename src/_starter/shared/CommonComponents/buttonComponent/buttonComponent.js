import React from "react";
import "./buttonComponent.css";

export const SLButtonComponent = ({className, buttonName, Icon}) => {
  return (<button className={className}>{buttonName}<Icon/></button>);
};
