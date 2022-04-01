import { React, useEffect, useState } from "react";
import { SLHeaderComponent } from "../headerComponent/headerComponent";
import { SLTableComponent } from "../tableComponent/tableComponent";
import { SLCardComponent } from "../cardComponent/cardComponent";
import { Fragment } from "react/cjs/react.production.min";
import { EmptyState } from "../../shared/EmptyState/EmptyState";
import { fetchPageData } from "./pageDataAPIService";
import { PAGE_TITLES } from "./../../../constants/pageTitleConstants";

export const PageComponent = () => {

/** 
 * TODO: Double check Acceptance Criterion
 * TODO: Refactor component structure
 * TODO: Build in API calls with data components
 * TODO: Make sure all display comonents are "dumb" aka display only
 * TODO: Refactor CSS into JS
 * TODO: Make sure styling is correct
 * TODO: Add tests
*/
  const [pageTitle, setPageTitle]  = useState('');
  const [peopleData, setPeopleData] = useState({});
  
  useEffect(() => {
    setPageTitle(PAGE_TITLES.people);
    fetchPageData(setPeopleData);
  }, []);

  const getPageEmptyView = () => {
      return (<div>
      <EmptyState children="" size = "large" title="No People Available"></EmptyState>
    </div>);
  }

  const getPageActiveView = () => {
      return (
        <div>
            <SLTableComponent props={peopleData} />
        </div>);
  }

  return (
    <>
        <div>
            <SLHeaderComponent headerTitle={pageTitle} />
        </div>
      {peopleData && Object.keys(peopleData).length > 0 ? getPageActiveView() : getPageEmptyView()}
    </>
      );
};
