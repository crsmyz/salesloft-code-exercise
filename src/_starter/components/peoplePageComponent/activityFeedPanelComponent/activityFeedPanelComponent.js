import React from "react";
// People Page Components
import { SLActivityPanelButtonHeaderComponent } from "../activityPanelButtonHeader/activityPanelButtonHeader";
import { SLActivitiesFeedDataComponent } from "../activitiesFeedDataComponent/activitiesFeedDataComponent";
// Common Components
import { SLTabListComponent } from "../../../shared/CommonComponents/tabListComponent/tabListComponent";
import { EmptyState } from "../../../shared/EmptyState/EmptyState";
// Constants
import { HEADER_CONSTANTS } from "../../../../constants/headerTitles";

export const SLActivityFeedPanelComponent = (props) => {
  return (
          <SLTabListComponent>
            <div label="Activity">
              <SLActivityPanelButtonHeaderComponent/>
              {Object.keys(props).map(propKey => (
                <>
                  <h2 key={propKey} className="slActivitiesHeader">{HEADER_CONSTANTS[propKey]}</h2>
                  <SLActivitiesFeedDataComponent key={propKey} propKey={propKey} props={props} />
                </>
                ))}
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
