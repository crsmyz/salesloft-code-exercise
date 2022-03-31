import React from "react";
// import { theme } from "./../../theme/theme";
import { SLCardComponent } from "../cardComponent/cardComponent";
import "./tableComponent.css";

export const SLTableComponent = ({data}) => {
  // table component
  const obj = {
    name: data.display_name,
    title: data.title,
    companyName: data.person_company_name
  } 
  return (
    <div className="slTableComponent">
        <div className="col1">
            <SLCardComponent data={obj}/>
        </div>
        <div className="col2">
            <SLCardComponent />
        </div>
        <div className="col3">
            <SLCardComponent />
        </div>
    </div>
  );
};
