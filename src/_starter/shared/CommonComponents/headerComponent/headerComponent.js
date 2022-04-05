import React from "react";
import PropTypes from "prop-types"
import './headerComponent.css';

export const SLHeaderComponent = ({headerTitle}) => {
  return (<div className="slHeaderComponent">
    <h3>{headerTitle}</h3>
    </div>);
};

SLHeaderComponent.propTypes = {
  props: PropTypes.object
}