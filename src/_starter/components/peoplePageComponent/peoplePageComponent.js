// React
import React, { useEffect, useState } from "react";
// People Page Components
import { fetchPageData } from "./peoplePageDataAPIService/peoplePageDataAPIService";
import { PersonPanelHeaderComponent, PersonPanelBodyComponent } from "./personPanelComponent/personPanelComponent";
import { SLActivePanelComponent } from "./../../shared/CommonComponents/activePanelComponent/activePanelComponent";
import { ActivitiesPanelComponent} from "./activitiesPanelComponent/activitiesPanelComponent";
// Common Components
import { SLHeaderComponent } from "../../shared/CommonComponents/headerComponent/headerComponent";
import { SLGridComponent } from "../../shared/CommonComponents/gridComponent/gridComponent";
// Constants
import { PAGE_TITLES } from "../../../constants/pageTitleConstants";
import { API_ENDPOINTS } from "../../../constants/apiEndpoints";

export const PeoplePageComponent = () => {

  // Recommendations for future development
  /**
   * Add typescript for full type safey and pre compile time bug checks
   * Write more unit tests espically for the logic heavy Components
   * See about formatting the API data in a way that takes less UI processing
   * Add loading spinner to pagecomponent
   * Look into error boundaries as needed
   */

  const [pageTitle, setPageTitle]  = useState('');
  const [peopleData, setPeopleData] = useState([]);
  const [activitiesData, setActivitiesData] = useState([]);
  const [thirdColumnData, setThirdColumnData] = useState([]);
  
  useEffect(() => {
    setPageTitle(PAGE_TITLES.people);
    fetchPageData(API_ENDPOINTS.peopleEndPoint, setPeopleData, setActivitiesData, setThirdColumnData);
  }, []);

  const renderCustomPanelForEachColumn = (i, data) => {
      if (i === 0 && data) return <SLActivePanelComponent key={i} panelHeader={PersonPanelHeaderComponent()} panelBody={PersonPanelBodyComponent(data)}/>;
      if (i === 1 && data) return <SLActivePanelComponent key={i} panelHeader={ActivitiesPanelComponent(data)} panelBody={null}/>;
  }

  const checkPageDataAndReturnView = () => {
    if (peopleData.length > 0 || activitiesData.length > 0 || thirdColumnData.length > 0) return (<div><SLGridComponent gridData={[peopleData, activitiesData, thirdColumnData]} gridRenderFunction={renderCustomPanelForEachColumn} /></div>)
  }

  return (
    <React.Fragment>
      <SLHeaderComponent headerTitle={pageTitle} />
      {checkPageDataAndReturnView()}
    </React.Fragment>
      );
};
