import React from "react";
// Common Components
import { SLButtonComponent } from "./../../../shared/CommonComponents/buttonComponent/buttonComponent";
import { default as ChevronSmDownIcon } from "./../../../shared/Icons/ChevronSmDown";
import { default as PhoneIcon } from "./../../../shared/Icons/Phone";
import { default as PlusIcon } from "./../../../shared/Icons/Plus";
// CSS
import "./activityPanelButtonHeader.css";

export const SLActivityPanelButtonHeaderComponent = () => {
    return (
        <div className="slActionHeader">
          <div className="slButtonGroup">
            <SLButtonComponent className="slButton primary" buttonName="Person" Icon={ChevronSmDownIcon}/>
            <SLButtonComponent className="slButton secondary" buttonName="Activity" Icon={ChevronSmDownIcon}/>
          </div>
          <div className="slButtonGroup">
            <SLButtonComponent className="slButton link" buttonName="Log a Call" Icon={PhoneIcon}/>
            <SLButtonComponent className="slButton link" buttonName="Add a Note" Icon={PlusIcon}/>
          </div>
        </div>);
  }