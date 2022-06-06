
import React, {useState} from 'react';
/**
 * Context for the nation.
 * Carries also the nodes of the canvas
 * Nations provider holds the citys array (all cities)
 */
const NationsContext = React.createContext({
    nationsProvider: [],
    nationsCurrentHandler: () => {},
    canvasNodes: [],
    canvasNodesCurrentHandler: () => {}
});

export const NationsContextProvider = (props) => {
    const [nationsCurrent,nationsCurrentHandler] = useState([]);
    const [canvasNodes,canvasNodesCurrentHandler] = useState([]);

    return(
        <NationsContext.Provider value={{
            nationsProvider: nationsCurrent,
            nationsCurrentHandler: nationsCurrentHandler,
            canvasNodes: canvasNodes,
            canvasNodesCurrentHandler: canvasNodesCurrentHandler
        }}>
        {props.children}
        </NationsContext.Provider>
    )
}

export default NationsContext;
