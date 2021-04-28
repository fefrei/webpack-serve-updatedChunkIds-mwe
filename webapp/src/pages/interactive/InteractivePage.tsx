import React from "react";
import { InteractiveElementBox } from "../../interactive/InteractiveElement";

export const InteractivePage: React.FC<{}> = () => {
    return <div className="interactive-page pad-navbar">
        <div className="interactive-container">
            <InteractiveElementBox />
        </div>
    </div>;
};
