import { React, useEffect, useState } from "react";
// People Page Components
import { SLActivityFeedPanelComponent} from "./activityFeedPanelComponent/activityFeedPanelComponent";
import { fetchPageData } from "./peoplePageDataAPIService";
// Common Components
import { SLHeaderComponent } from "../../shared/CommonComponents/headerComponent/headerComponent";
import { SLGridComponent } from "./../../shared/CommonComponents/gridComponent/gridComponent";
import { SLActivePanelComponent } from "./../../shared/CommonComponents/activePanelComponent/activePanelComponent";
import { SLEmptyPanelComponent } from "./../../shared/CommonComponents/emptyPanelComponent/emptyPanelComponent";
import { default as StarOutlinedIcon } from "../../shared/Icons/StarOutlined";
import { default as EllipsisHorizontal } from "../../shared/Icons/EllipsisHorizontal";
import { default as Cloud } from "../../shared/Icons/Cloud";
import { default as LinkedIn } from "../../shared/Icons/LinkedIn";
import { default as Twitter } from "../../shared/Icons/Twitter";
import { default as LinkIcon } from "../../shared/Icons/Link";
// Constants
import { PAGE_TITLES } from "../../../constants/pageTitleConstants";

export const PeoplePageComponent = () => {
  const [pageTitle, setPageTitle]  = useState('');
  const [peopleData, setPeopleData] = useState([]);
  const [activitiesData, setActivitiesData] = useState([]);
  const [thirdColumnData, setThirdColumnData] = useState([]);
  
  useEffect(() => {
    setPageTitle(PAGE_TITLES.people);
    fetchPageData(setPeopleData, setActivitiesData);
  }, []);

  const personPanelHeader = (d) => {
    return (<><div className="slActivePanelHeaderLeft"><StarOutlinedIcon /></div><div className="slActivePanelHeaderRight"><EllipsisHorizontal /></div></>);
  }
    
  const personPanelBody = (d) => {
    return <><h1 className="slActivePanelName">{d.display_name}</h1><h4 className="slActivePanelTitle">{d.title}</h4><h4 className="slActivePanelCompanyName">{d.person_company_name}</h4><div className="slActivePanelSocialIcons">
        <Cloud /><LinkedIn /><Twitter /><LinkIcon />
    </div></>;
  }

  const panelActivitiesComp = (i, rowData) => {
    return (<SLActivityFeedPanelComponent key={i} {...rowData}/>);
  }

  const generateActivePanel = (i, data) => {
    if (i === 0 && data) return <SLActivePanelComponent key={i} panelHeader={personPanelHeader(data)} panelBody={personPanelBody(data)}/>;
    if (i === 1 && data) return <SLActivePanelComponent key={i} panelHeader={panelActivitiesComp(i, data)} panelBody={null}/>;
    if (i === 2 && data) return <SLActivePanelComponent key={i} panelHeader={null} panelBody={null}/>;
    if (!data) return <SLEmptyPanelComponent key={i}/>;
  }

  const checkPageDataAndReturnView = () => {
    const people = peopleData && Object.keys(peopleData).length > 0;
    const activities = activitiesData && Object.keys(activitiesData).length > 0;
    if(people || activities) return getPageActiveView();
  }

  const getPageActiveView = () => {
    return (
      <div>
          <SLGridComponent gridData={[peopleData, activitiesData, thirdColumnData]} gridRenderFunction={generateActivePanel} />
      </div>);
}

  return (
    <>
      <SLHeaderComponent headerTitle={pageTitle} />
      {checkPageDataAndReturnView()}
    </>
      );
};
