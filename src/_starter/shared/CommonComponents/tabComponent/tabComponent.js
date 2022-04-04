import { React } from "react";
import "./tabComponent.css";

export const SLTabComponent = (props) => {
    let tabItemStyle = 'slTabItem';

    if (props.activeTab === props.tabName) {
        tabItemStyle += ' active';
    }

    return (
        <li className={tabItemStyle} onClick={props.onClick}>
            {props.tabName}
        </li>
    )
}