import React from "react";
import { default as StarOutlinedIcon } from "../../shared/Icons/StarOutlined";
import { default as EllipsisHorizontal } from "../../shared/Icons/EllipsisHorizontal";
import { default as Cloud } from "../../shared/Icons/Cloud";
import { default as LinkedIn } from "../../shared/Icons/LinkedIn";
import { default as Twitter } from "../../shared/Icons/Twitter";
import { default as LinkIcon } from "../../shared/Icons/Link";
import "./cardComponent.css";

export const SLCardComponent = (data) => {
  // card component
  return (
    <>
      {Object.keys(data).length > 0 ? <div className="slCardComponent">
          <header className="slCardHeader">
              <div className="slCardHeaderLeft"><StarOutlinedIcon /></div>
              <div className="slCardHeaderRight"><EllipsisHorizontal /></div>
          </header>
          <div className="slCardBody">
              <h1 className="slCardName">{data.display_name}</h1>
              <h4 className="slCardTitle">{data.title}</h4>
              <h4 className="slCardCompanyName">{data.person_company_name}</h4>
              <div className="slCardSocialIcons">
                <Cloud/><LinkedIn/><Twitter/><LinkIcon/>
              </div>
          </div>
      </div> :
      <div className="slEmptyCardComponent">
      </div>}
    </>
    );
};
