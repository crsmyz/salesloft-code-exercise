import React from "react";
// import { theme } from "./../../theme/theme";
import { SLCardComponent } from "../cardComponent/cardComponent";
import "./tableComponent.css";

export const SLTableComponent = ({data}) => {
  // table component
  // TODO: BE CAREFUL WITH PROP SPREADING HERE COULD BE A PERFORMANCE HIT!
  return (
    <div className="slTableComponent">
        <div className="col1">
            <SLCardComponent {...data}/>
        </div>
        <div className="col2">
            <SLCardComponent {...data}/>
        </div>
        <div className="col3">
            <SLCardComponent />
        </div>
    </div>
  );
};
