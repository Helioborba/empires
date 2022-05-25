
import React, {useState,useEffect} from 'react';
/**
 * Context for the nation.
 * 
 */
const NationsContext = React.createContext({
    nationsProvider: [],
    nationsCurrentHandler: () => {}
});

export const NationsContextProvider = (props) => {
    const [nationsCurrent,nationsCurrentHandler] = useState([]);

    useEffect( () => {
        const identifier = setTimeout( () => {
        return () => {
          clearTimeout(identifier);
        };
      })
    },[nationsCurrent])
    return(
        <NationsContext.Provider value={{
            nationsProvider: nationsCurrent,
            nationsCurrentHandler: nationsCurrentHandler
        }}>
        {props.children}
        </NationsContext.Provider>
    )
}

export default NationsContext;
