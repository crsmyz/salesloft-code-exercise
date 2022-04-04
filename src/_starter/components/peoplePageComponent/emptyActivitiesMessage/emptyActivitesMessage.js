import React from "react";
import { COMPONENT_MESSAGE_CONSTANTS } from "../../../../constants/componentMessage";
// CSS
import "./emptyActivitiesMessage.css";

export const EmptyActivitiesMessage = () => {
    return <h3 className="slEmptyActivities">{COMPONENT_MESSAGE_CONSTANTS.emptyActivities}</h3>
  }