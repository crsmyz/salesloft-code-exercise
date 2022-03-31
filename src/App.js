import React from "react";
import { SLHeaderComponent } from "./_starter/components/headerComponent/headerComponent";
import { SLTableComponent } from "./_starter/components/tableComponent/tableComponent";
import { SLCardComponent } from "./_starter/components/cardComponent/cardComponent";
import { Fragment } from "react/cjs/react.production.min";
import { EmptyState } from "./_starter/shared/EmptyState/EmptyState";
import { mockApiData } from "./_starter/mockData/mockData";

export const App = () => {

// <SLTableComponent data={mockApiData}/>
  return (
    <>
      <div>
        <SLHeaderComponent headerTitle='People'/>
      </div>
      <div>
        <SLTableComponent data={mockApiData}/>
      </div>
      <div>
        <EmptyState children="" size = "large" thumbnail="no thank you" title="empty state" text="gg"></EmptyState>
      </div>

    </>
    );
};
