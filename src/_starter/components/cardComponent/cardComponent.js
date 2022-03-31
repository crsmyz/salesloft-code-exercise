import React from "react";
import { default as StarOutlinedIcon } from "../../shared/Icons/StarOutlined";
import { default as EllipsisHorizontal } from "../../shared/Icons/EllipsisHorizontal";
import "./cardComponent.css";

export const SLCardComponent = (data) => {
  // card component
  console.log(data);
  return (
    <>
      {data ? <div className="slCardComponent">
          <header className="slCardHeader">
              <div className="slCardHeaderLeft"><StarOutlinedIcon /></div>
              <div className="slCardHeaderRight"><EllipsisHorizontal /></div>
          </header>
          <div className="slCardBody">
              <h1 className="slCardName">Gary Glover</h1>
              <h4 className="slCardTitle">Marketing Manager</h4>
              <h4 className="slCardCompanyName">Facebook</h4>
          </div>
      </div> :
      <div className="slEmptyCardComponent">
      </div>};
    </>
    );
};
