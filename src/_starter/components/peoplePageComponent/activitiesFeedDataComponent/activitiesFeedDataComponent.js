import React from "react";
// People Page Components
import { EmptyActivitiesMessage } from "../emptyActivitiesMessage/emptyActivitesMessage";
// Common Components
import { SLActivityFeedItemComponent } from "../../../shared/CommonComponents/activityFeedItemComponent/activityFeedItemComponent";
import { default as PhoneIcon } from "./../../../shared/Icons/Phone";

export const SLActivitiesFeedDataComponent = ({propKey, props}) => {

    // TODO: determine icon
    const getActivitiesFeedHeaderComponet = (data) => {
        return <SLActivityFeedItemComponent key={data.id} props={data} Icon={PhoneIcon}/>;
      }

    return (props && props[propKey] && props[propKey].data && props[propKey].data.length > 0 ? 
        props[propKey].data.map(data => (
            getActivitiesFeedHeaderComponet(data)
          ))
          :
          <EmptyActivitiesMessage/>
          );
  }