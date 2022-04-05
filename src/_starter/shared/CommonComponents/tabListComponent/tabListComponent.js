import { React, useState } from "react";
import PropTypes from "prop-types"
import { SLTabComponent } from "./../tabComponent/tabComponent";
import "./tabListComponent.css";

export const SLTabListComponent = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const tabClickHandler = (event) => {
        event.preventDefault();
        setActiveTab(event.target.textContent);
    }

    const generateTabLabels = () => {
        return children.map((tab) => {
            return <SLTabComponent key={tab.props.label} tabName={tab.props.label} activeTab={activeTab} onClick={tabClickHandler}/>
        });
    }

    const componentWithChildren = () => {
        return (
            <div className="slTabListComponent">
                <ul className="slTabList">
                    {generateTabLabels()}    
                </ul>
                <div className="slTabData">
                    {children.map((child) => {
                     return child.props.label !== activeTab ? undefined : child.props.children;
                    })}
                </div>
            </div>)
    }
    return (children && children.length > 0 ? componentWithChildren(): null)
}

SLTabListComponent.propTypes = {
    children: PropTypes.array
}
