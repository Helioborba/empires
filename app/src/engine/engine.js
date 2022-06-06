import React, { useEffect, useState, useContext } from "react";
import CanvasContext from "../context/canvas.js";
import ClockContext from "../engine/clockProvider.js";
import { drawLine } from "./canvas.js";
import NationsContext from "./nationsProvider.js";



function trowDice() {
    return Math.random() * (900 - 0) + 0;
}


/**
* Creates the array holding the city NAME with their respective position

* OBS: Not the whole Object, for the cities Objects see the NationsContext. 
*/
function startMarch(providerNations,providerCanvas) {
    let nodesArray = providerNations.canvasNodes;

    // adds the coords to a special array containing the city name and relative positions coordinates
    // the trow dice will be used to check if a march will start or not.
    const nodesCoords = [];
    if (trowDice() > 10) {
        nodesArray.forEach((node) => {
            if (node.type === "city") {
                nodesCoords.push(...providerCanvas?.marchNodes,{name: node.city.name, posx: node.posx, posy: node.posy});
            }
        })
    }
    
    if (nodesCoords[0] != null) {
        providerCanvas.marchNodesHandler(nodesCoords);
    }

    // In case 2 cities are already present, write the city nodes for processing in the drawing.
    if (nodesCoords.length >= 2) {
        let newMarchingArray = {from:null,to:null};
        for (const node of nodesCoords) {
            if (newMarchingArray.from === null) {
                newMarchingArray.from = node;
            } else if (newMarchingArray.to === null) {
                newMarchingArray.to = node;
            } else {
                providerCanvas.currentAtMarchHandler(newMarchingArray);
                return true;
            }
        }
    }
    return false;
}

/**
 * The engine holds the process of marches for now, it's also wrapping the whole app.
 */
const Engine = () => {
    const ctxClock = useContext(ClockContext);
    const ctxCanvas = useContext(CanvasContext);
    const ctxNations = useContext(NationsContext);

    // Is running should be located at the canvas context actually
    let [isRunning, isRunningController] = useState(false);

    // the march is declared here
    useEffect( () => {
        const identifier = setTimeout( () => {
            if (isRunning) {
                //drawLine(ctxCanvas.canvasNodes);
            } else {
                //isRunningController(true); // jogar o dado; se maior manter bloqueado, se menor iniciar marcha.
                isRunningController(startMarch(ctxNations,ctxCanvas)); // jogar o dado; se maior manter bloqueado, se menor iniciar marcha.
            }
        return () => {
            clearTimeout(identifier);
        };
      })
    },[ctxClock.clockProvider])

    return (
        <React.Fragment></React.Fragment>
    )
}

export default Engine;