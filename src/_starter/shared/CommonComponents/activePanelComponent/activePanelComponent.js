import React from "react";
import PropTypes from "prop-types"
import "./activePanelComponent.css";

export const SLActivePanelComponent = ({panelHeader, panelBody}) => {
  return (
      <div className="slActivePanelComponent">
        <header className="slActivePanelHeader">
          {panelHeader}
        </header>
        <div className="slActivePanelBody">
          {panelBody}
        </div>
      </div>
    );
};

SLActivePanelComponent.propTypes = {
  panelHeader: PropTypes.node,
  panelBody: PropTypes.node
}
