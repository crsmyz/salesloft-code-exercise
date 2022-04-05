import React from "react";
// Common Components
import { SLButtonComponent } from "./../../../../shared/CommonComponents/buttonComponent/buttonComponent";
import { default as ChevronSmDownIcon } from "./../../../../shared/Icons/ChevronSmDown";
import { default as PhoneIcon } from "./../../../../shared/Icons/Phone";
import { default as PlusIcon } from "./../../../../shared/Icons/Plus";
// CSS
import "./activitiesButtonHeader.css";

export const ActivitiesButtonHeaderComponent = () => {
    return (
        <div className="slActivitiesButtonHeader">
          <div className="slButtonGroup">
            <SLButtonComponent className="slButton primary" buttonName="Person" IconRight={ChevronSmDownIcon}/>
            <div className="slActionHeaderButtonDivider"/>
            <SLButtonComponent className="slButton secondary" buttonName="Activity" IconRight={ChevronSmDownIcon}/>
          </div>
          <div className="slButtonGroup">
            <SLButtonComponent className="slButton link" buttonName="Log a Call" IconLeft={PhoneIcon} />
            <SLButtonComponent className="slButton link" buttonName="Add a Note" IconLeft={PlusIcon} />
          </div>
        </div>);
  }