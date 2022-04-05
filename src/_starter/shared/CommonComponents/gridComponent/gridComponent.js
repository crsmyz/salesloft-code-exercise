import React from "react";
import PropTypes from "prop-types"
import { EmptyState } from "../../EmptyState/EmptyState";
import { SLEmptyPanelComponent } from "./../emptyPanelComponent/emptyPanelComponent";
import "./gridComponent.css";

export const SLGridComponent = ({gridData, gridRenderFunction}) => {
  const columnStyle = "sl_col_";

  const getPageEmptyView = () => {
    return (
    <div>
      <EmptyState children="" size = "large" title="No Data Available"></EmptyState>
    </div>);
  }

  const generateGridColumns = () => {
    return gridData.map((colData, colIndex) => {
      if (colData) {
        return <div key={colIndex} className={columnStyle + (colIndex+1)}>
                  {colData.length > 0 && colData.map((rowData, rowIndex) => {
                    return rowData ? gridRenderFunction(colIndex, rowData) : <SLEmptyPanelComponent/>;
                  })}
                </div>
        }
        return <SLEmptyPanelComponent/>;
      })
    }

  return (
    <div className="slGridComponent">
      {gridData && gridData.length > 0 ? generateGridColumns() : getPageEmptyView()}
    </div>
  );
};

SLGridComponent.propTypes = {
  gridData: PropTypes.array,
  generateActivePanel: PropTypes.func,
}