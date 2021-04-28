import React from 'react';

import interactiveElementDefinitions from "./pseuco/pseuco";
export const InteractiveElementBox: React.FC<{}> = () => {
    const component = interactiveElementDefinitions["pseuco-testing"].getComponent();
    return component;
};
