import { React } from "react";
import PropTypes from "prop-types"
import "./tabComponent.css";

export const SLTabComponent = ({key, tabName, activeTab, onClick}) => {
    let tabItemStyle = 'slTabItem';

    if (activeTab === tabName) {
        tabItemStyle += ' active';
    }

    return (
        <li className={"slTabItem " + tabItemStyle} onClick={onClick}>
            {tabName}
        </li>
    )
}

SLTabComponent.propTypes = {
    key: PropTypes.string,
    tabName: PropTypes.string,
    activeTab: PropTypes.string,
    onClick: PropTypes.func
}
