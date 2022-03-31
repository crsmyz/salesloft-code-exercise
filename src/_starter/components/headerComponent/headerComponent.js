import React from "react";
import './headerComponent.css';

export const SLHeaderComponent = ({headerTitle}) => {
  // header component for "People"
  return (<div className="headerComponent">
    <h3>{headerTitle}</h3>
    </div>);
};
