import React from "react";
import PropTypes from "prop-types"
import { CircleButton } from "./../../CircleButton/CircleButton";
import "./activityFeedItemComponent.css";

export const SLActivityFeedItemComponent = ({Icon, mainSubject, userSubject, date, bgColor, color}) => {
    const formatDate = (date) => {
        const newDate = new Date(date);
        const listOfMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        return listOfMonths[newDate.getUTCMonth()] + ' ' + newDate.getUTCDate() + ' ' + newDate.getUTCFullYear();
    }

    const formatTime = (date) => {
        const newDate = new Date(date);
        return newDate.toLocaleString().split(",")[1].trim();
    }

    return (
        <div className="slActivityFeedItemComponent">
            <div className="slActivityFeedItemIcon">
                <CircleButton isDisabled={false} handleClick={null} Icon={Icon} bgColor={bgColor} color={color}/>
            </div>
            <div className="slActivityFeedItemData">
                <div className="slActivityFeedItemBody">
                    <div className="slMainSubject">{mainSubject}</div>
                    <div className="slUserSubject">{userSubject}</div>
                </div>
                <div className="slActivityFeedItemTime">
                    <div className="dateAndTime">{formatDate(date)}</div>
                    <div className="dateAndTime">{formatTime(date)}</div>
                </div>
            </div>
        </div>
    );
};

SLActivityFeedItemComponent.propTypes = {
    Icon: PropTypes.node,
    mainSubject: PropTypes.string,
    userSubject: PropTypes.func, 
    date: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string
}