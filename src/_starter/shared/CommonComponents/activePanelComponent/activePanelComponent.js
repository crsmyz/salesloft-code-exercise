import React from "react";
import "./activePanelComponent.css";

export const SLActivePanelComponent = (props) => {
  return (
      <div className="slActivePanelComponent">
        <header className="slActivePanelHeader">
          {props.panelHeader}
        </header>
        <div className="slActivePanelBody">
          {props.panelBody}
        </div>
      </div>
    );
};
