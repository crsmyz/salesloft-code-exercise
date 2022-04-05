// React
import React from "react";
import { PropTypes } from 'prop-types';
// People Page Components
import { FormatFeedData } from "./activityFeedDataFormater";
// Common Components
import { SLEmptyHeaderMessage } from "../../../../shared/CommonComponents/emptyActivitiesMessage/emptyActivitesMessage";
import { SLActivityFeedItemComponent } from "../../../../shared/CommonComponents/activityFeedItemComponent/activityFeedItemComponent";
// constants
import { COMPONENT_MESSAGE_CONSTANTS } from "../../../../../constants/componentMessage";

export const ActivitiesFeedDataComponent = ({data}) => {

    const renderActivityFeedItem = (formattedData) => {
      return <SLActivityFeedItemComponent key={formattedData.id} Icon={formattedData.Icon} mainSubject={formattedData.mainSubject} userSubject={formattedData.userSubject} date={formattedData.date} bgColor={formattedData.bgColor} color={formattedData.color} />
    }

    return (data && data.length > 0 ? 
        data.map(data => (
            renderActivityFeedItem(FormatFeedData(data))
          )) : <SLEmptyHeaderMessage message={COMPONENT_MESSAGE_CONSTANTS.emptyActivities}/>);
  }

  ActivitiesFeedDataComponent.propTypes = {
    data: PropTypes.array
}