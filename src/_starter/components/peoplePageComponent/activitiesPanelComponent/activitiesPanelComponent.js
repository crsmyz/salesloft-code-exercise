import React from "react";
import PropTypes from "prop-types";
// People Page Components
import { ActivitiesButtonHeaderComponent } from "./activitiesButtonHeader/activitiesButtonHeader";
import { ActivitiesFeedDataComponent } from "./activitiesFeedDataComponent/activitiesFeedDataComponent";
// Common Components
import { SLTabListComponent } from "./../../../shared/CommonComponents/tabListComponent/tabListComponent";
import { EmptyState } from "../../../shared/EmptyState/EmptyState";
// Constants
import { HEADER_CONSTANTS } from "../../../../constants/headerTitles";
// CSS
import "./activitiesPanelComponent.css";

export const ActivitiesPanelComponent = (data) => {

  const getActivitiesPanelHeaderAndData = () => {
    return Object.keys(data).map(propKey => {
      return (<React.Fragment>
        <h2 key={propKey} className="slActivitiesHeader">{HEADER_CONSTANTS[propKey]}</h2>
        <ActivitiesFeedDataComponent key={propKey} propKey={propKey} data={data[propKey].data} />
      </React.Fragment>)
    });
  }

  return (<SLTabListComponent>
            <div label="Activity">
              <ActivitiesButtonHeaderComponent/>
              {getActivitiesPanelHeaderAndData()}
            </div>
            <div label="Tracking">
              <EmptyState children="" size = "large" title="No Tracking Data"></EmptyState>
            </div>
            <div label="Reminder">
              <EmptyState children="" size = "large" title="No Reminder Data"></EmptyState>
            </div>
          </SLTabListComponent>
    );
};

ActivitiesPanelComponent.propTypes = {
  columnIndex: PropTypes.number,
  data: PropTypes.object,
}