
import React, {useState} from 'react';
/**
 * Context for the nation.
 * Carries also the nodes of the canvas
 * 
 */
const NationsContext = React.createContext({
    nationsProvider: [],
    nationsCurrentHandler: () => {},
    canvasNodes: []
});

export const NationsContextProvider = (props) => {
    const [nationsCurrent,nationsCurrentHandler] = useState([]);

    return(
        <NationsContext.Provider value={{
            nationsProvider: nationsCurrent,
            nationsCurrentHandler: nationsCurrentHandler,
            canvasNodes:[]
        }}>
        {props.children}
        </NationsContext.Provider>
    )
}

export default NationsContext;
