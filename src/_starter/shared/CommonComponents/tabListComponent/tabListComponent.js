import { React, useState } from "react";
import { SLTabComponent } from "./../tabComponent/tabComponent";
import "./tabListComponent.css";

export const SLTabListComponent = (props) => {
    const [activeTab, setActiveTab] = useState(props.children[0].props.label);
    const tabClickHandler = (event) => {
        event.preventDefault();
        setActiveTab(event.target.textContent);
    }

    const generateTabLabels = () => {
        return props.children.map((tab) => {
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
                    {props.children.map((child) => {
                     return child.props.label !== activeTab ? undefined : child.props.children;
                    })}
                </div>
            </div>)
    }

    return (props.children && props.children.length > 0 ? componentWithChildren(): null)
}