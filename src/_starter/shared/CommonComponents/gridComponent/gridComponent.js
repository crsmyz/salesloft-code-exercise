import React from "react";
import { EmptyState } from "../../EmptyState/EmptyState";
import { SLEmptyPanelComponent } from "./../emptyPanelComponent/emptyPanelComponent";
import "./gridComponent.css";

export const SLGridComponent = (props) => {
  // TODO: render out each column programmatically
  const columnStyle = "sl_col_";

  const getPageEmptyView = () => {
    return (
    <div>
      <EmptyState children="" size = "large" title="No People Available"></EmptyState>
    </div>);
  }

  const generateGridColumns = () => {
    return props.gridData.map((colData, colIndex) => {
      // TODO: attach dynamic class here
          return <div key={colIndex} className={columnStyle + (colIndex+1)}>
              {colData && colData.length > 0 ? colData.map((rowData, rowIndex) => {
              return props.gridRenderFunction(colIndex, rowData);
            }) 
            :
            <SLEmptyPanelComponent/>}
          </div>
        });
  }

  return (
    <div className="slGridComponent">
      {generateGridColumns()}
    </div>
  );
};
