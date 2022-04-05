import React from "react";
import PropTypes from "prop-types"
import "./buttonComponent.css";

export const SLButtonComponent = ({className, buttonName, IconLeft, IconRight}) => {
  return (<button className={className}>{IconLeft && <IconLeft className="slButtonIcon"/>}{buttonName}{IconRight && <IconRight className="slButtonIcon"/>}</button>);
};

SLButtonComponent.propTypes = {
  props: PropTypes.object
}