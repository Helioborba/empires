import React, { useEffect, useState, useContext } from "react";
import CanvasContext from "../context/canvas.js";
import ClockContext from "../engine/clockProvider.js";
import { drawLine } from "./canvas.js";

function trowDice() {
    return Math.random() * (5 - 0) + 0;
}

const Engine = () => {
    const ctxClock = useContext(ClockContext);
    const ctxCanvas = useContext(CanvasContext);
    // Is running should be located at the canvas context actually
    let [isRunning,isRunningController] = useState(false);

    if (isRunning) {
        drawLine(ctxCanvas.canvasProvider);
    } else {
        isRunningController(trowDice() > 10 ? true : false); // jogar o dado; se maior manter bloqueado, se mentor iniciar guerra
    }
    useEffect( () => {
        const identifier = setTimeout( () => {
            console.log('123');
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