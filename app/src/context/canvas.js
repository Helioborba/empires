
import React, {useState,useEffect} from 'react';

/**
 * Context for clock.
 * 
 */
const CanvasContext = React.createContext({
    canvasProvider: undefined,
    CanvasCurrentHandler: () => {}
});

export const CanvasContextProvider = (props) => {
    const [canvasCurrent,canvasCurrentHandler] = useState(undefined);

    return(
        <CanvasContext.Provider value={{
            canvasProvider: canvasCurrent,
            canvasCurrentHandler: canvasCurrentHandler
        }}>
        {props.children}
        </CanvasContext.Provider>
    )
}

export default CanvasContext;
