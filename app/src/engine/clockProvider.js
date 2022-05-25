
import React, {useState,useEffect} from 'react';
import clock from './clock';
/**
 * Context carregando a comunicacao com a API.
 * 
 */
const ClockContext = React.createContext({
    clockProvider: undefined
});

export const ClockContextProvider = (props) => {
    const [clockCurrent,ClockCurrentHandler] = useState(undefined);

    useEffect( () => {
        const identifier = setTimeout( () => {
            clock(clockCurrent).then( (value) => {
                ClockCurrentHandler(value);
                console.log(clockCurrent);
            })
        return () => {
          clearTimeout(identifier);
        };
      })
    },[clockCurrent])
    return(
        <ClockContext.Provider value={{
            clockProvider: clockCurrent
        }}>
        {props.children}
        </ClockContext.Provider>
    )
}

export default ClockContext;
