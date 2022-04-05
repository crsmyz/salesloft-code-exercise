// React
import React from "react";
import PropTypes from "prop-types";
// Common Components
import { default as StarOutlinedIcon } from "../../../shared/Icons/StarOutlined";
import { default as EllipsisHorizontal } from "../../../shared/Icons/EllipsisHorizontal";
import { default as Cloud } from "./../../../shared/Icons/Cloud";
import { default as LinkedIn } from "./../../../shared/Icons/LinkedIn";
import { default as Twitter } from "./../../../shared/Icons/Twitter";
import { default as LinkIcon } from "./../../../shared/Icons/Link";
// CSS
import "./personPanelHeader.css";


export const PersonPanelHeaderComponent = () => {
    return (<React.Fragment>
        <div className="slActivePanelHeaderLeft"><StarOutlinedIcon className="starIconColor"/></div><div className="slActivePanelHeaderRight"><EllipsisHorizontal className="ellipsisHorizontalColor" /></div>
      </React.Fragment>);
}
      
export const PersonPanelBodyComponent = ({display_name, title, person_company_name}) => {
    return <React.Fragment>
            <h1 className="slActivePanelName">{display_name}</h1>
            <h4 className="slActivePanelTitle">{title}</h4>
            <h4 className="slActivePanelCompanyName">{person_company_name}</h4>
            <div className="slActivePanelSocialIcons">
              <Cloud className="cloud" /><LinkedIn className="linkedIn" /><Twitter className="twitter" /><LinkIcon className="link" />
            </div>
          </React.Fragment>;
}

PersonPanelBodyComponent.propTypes = {
  display_name: PropTypes.string,
  title: PropTypes.string,
  person_company_name: PropTypes.string
}