import React from "react";
import PropTypes from "prop-types"
// CSS
import "./emptyActivitiesMessage.css";

export const SLEmptyHeaderMessage = ({message}) => {
    return <h3 className="slEmptyActivities">{message}</h3>
  }

  SLEmptyHeaderMessage.propTypes = {
    message: PropTypes.string
  }