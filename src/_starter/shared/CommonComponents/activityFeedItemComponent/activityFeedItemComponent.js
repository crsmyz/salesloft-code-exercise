import React from "react";
import { CircleButton } from "./../../CircleButton/CircleButton";
import "./activityFeedItemComponent.css";

export const SLActivityFeedItemComponent = (props) => {
    return (
        <div className="slActivityFeedItemComponent">
            <div className="slActivityFeedItemIcon">
                <CircleButton isDisabled={false} handleClick={null} Icon={props.Icon}/>
            </div>
            <div className="slActivityFeedItemData">
                <div className="slActivityFeedItemBody">
                    <div className="">{props.props.id}</div>
                    <div className="">{props.props?.dynamic_data?.user_name}</div>
                </div>
                <div className="slActivityFeedItemTime">
                    <div className="">{props.props.occurred_at}</div>
                    <div className="">{props.props.occurred_at}</div>
                </div>
            </div>
        </div>
    );
};
